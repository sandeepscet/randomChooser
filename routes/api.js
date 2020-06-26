var express = require('express');
var router = express.Router();
var Airtable = require('airtable');
require('dotenv').config()
var base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_RANDOMCHOOSER_TABLE);

/* GET users listing. */
router.get('/', function (req, res, next) {
  let all = [], joined = [], profilepic = [], questions = [];
  base('Quiz').select({
    view: "Grid view",
  }).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.

    records.forEach(function (record) {
      all.push(record.get("All"));
      joined.push(record.get("Joined"));
      profilepic.push(record.get("ProfilePic"));
      questions.push(record.get("Question1"));
    });
    
    fetchNextPage();

  }, function done(err) {
    if (err) { 
      console.error(err); return; 
      res.status(500).send(err);
    }
    else{
      response = {all , joined , profilepic , questions };
      res.status(200).send(response);
    }
  });

});

module.exports = router;
