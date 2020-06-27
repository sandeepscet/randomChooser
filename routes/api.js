var express = require('express');
var router = express.Router();
var Airtable = require('airtable');
const { response } = require('express');
require('dotenv').config()
var base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_RANDOMCHOOSER_TABLE);

/* GET users listing. */
router.get('/getRandomRecord', function (req, res, next) {
  let all = [], joined = [], profilepic = [], questions = [];
  base('Quiz').select({
    view: "Grid view",
  }).eachPage(function page(records, fetchNextPage) {
    
    records.forEach(function (record) {
      all.push(record.get("All"));
      joined.push(record.get("Joined"));
      profilepic.push(record.get("ProfilePic"));
      questions.push(record.get("Questions"));
    });
    
    fetchNextPage();

  }, function done(err) {
    if (err) { 
      console.error(err); return; 
      res.status(500).send(err);
    }
    else{
      let members = {};
      let joinedSession = [];
      for(let index = 0;index < all.length ;index++)
      {
        members[all[index]] = {'name' : all[index] , 'joined': joined[index] , 'profilepic':profilepic[index] , 'questions':questions[index]};
        if(joined[index]){
          joinedSession.push(all[index]);
        }
      }

      const correctAnswerers = all;
      const finalArr = correctAnswerers.filter(value => joinedSession.includes(value));
      const randomSelected = finalArr[Math.floor(Math.random() * finalArr.length)];

      //response = {all , joined , profilepic , questions };
      setTimeout(function() {
        res.status(200).send({'selected' : members[randomSelected]});
    }, 3000);
      
    }
  });

});

module.exports = router;
