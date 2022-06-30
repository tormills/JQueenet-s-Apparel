

const express = require("express");
const bodyParser = require("body-parser");
const request = require ("request");

const app = express();


app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/Apparel.html");
});

app.get("/Contact", function(req, res){

  res.sendFile(__dirname + "/Contact.html");

});


app.get("/Collections", function(req, res){

  res.sendFile(__dirname + "/Collections.html");

});





app.post("/Contact", function(req, res){
  res.redirect("/")
});

app.post("/Collections", function(req, res){
  res.redirect("/")
});

/*
app.post("/Contact", function (req, res){
  if (response.statusCode === 200){
    res.sendFile(__dirname + "/Submit.html");}
});
*/

app.listen(process.env. PORT || 3000, function(){
  console.log("server is listening on port 3000");
});

/*
  app.listen(process.env.PORT || 3000, function(){
    console.log("server is listening on port 3000");
  });
*/
