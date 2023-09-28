// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});


app.get("/api/:date?", function (req, res) {
  let date=req.params.date;
  let unixformat,utcformat,dateObj
   
  let isnum = /^\d+$/.test(date);

  if(!date){
    dateObj=new Date();
  }
  else if(date && isUnix){
    unixformat=parseInt(date);
    dateObj=new Date(unixformat);
  }

  else if(date&&!isUnix){
    dateObj=new Date(date);
  }

  if(dateObj.toString()==="Invalid Date"){
    res.json({error:"Invalid Date"})
    return;
  }

  unixformat=dateObj.getTime();
  utcformat=dateObj.toUTCString();

  res.json({
    unix:unixformat,
    utc:utcformat
  })

})

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
