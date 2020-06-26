var express = require('express');
var router = express.Router();
var Airtable = require('airtable');
require('dotenv').config()
var base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_RANDOMCHOOSER_TABLE);

/* GET users listing. */
router.get('/', function (req, res, next) {
  
  base('Quiz').select({
    view: "Grid view",
  }).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.

    records.forEach(function (record) {
      console.log('retrieved');
      console.log( record.get("All"));
      console.log( record.get("Joined"));
      console.log( record.get("ProfilePic"));
      console.log( record.get("Question1"));
    });

    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    console.log('fetched next page');
    fetchNextPage();

  }, function done(err) {
    if (err) { 
      console.error(err); return; 
    }
    else{
      console.log('done');
      res.send({'done': true});
    }
  });

});

module.exports = router;
