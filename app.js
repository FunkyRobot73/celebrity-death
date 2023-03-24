const express = require("express");
const ejs = require("ejs")
const app = express();
const bodyParser = require("body-parser");
const request = require('request');

const jimmyBlue = require("./bluejay");

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"))





app.get("/", function(req, res) {
  res.render("index.ejs");

  let name = 'Wayne Gretzky';
request.get({
  url: 'https://api.api-ninjas.com/v1/celebrity?name=' + name,
  headers: {
    'X-Api-Key': "+hH/PkJhGtWiY+qQTo6lJA==4KZ77c7NarK8dY5t"
  },
}, function(error, response, body) {
  if(error) return console.error('Request failed:', error);
  else if(response.statusCode != 200) return console.error('Error:', response.statusCode, body.toString('utf8'));
  else { 
    console.log(typeof(body))
    console.log(`This is it ==> ${body}`)
  }
});

});




app.listen(process.env.PORT || 3000, function() {
  console.log("Server is running on Port 3000.")
})


