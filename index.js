

const express = require("express");
const bodyParser = require("body-parser");
const request = require ("request");

const app = express();



app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/timber.html");
});

app.get("/Contact", function(req, res){

  res.sendFile(__dirname + "/Contact.html");

});


app.get("/Submit", function(req, res){

  res.sendFile(__dirname + "/Submit.html");

});



app.post("/Contact", function(req, res){

  const fname = req.body.fname;
  const lname = req.body.lname;


      res.redirect("/")

  });

app.post("/Contact", function(req, res){
  res.redirect("/")
})

app.post("/Submit", function(req, res){
  res.redirect("/")
})

/*
app.post("/Contact", function (req, res){
  if (response.statusCode === 200){
    res.sendFile(__dirname + "/Submit.html");}
});
*/


  app.listen(process.env.PORT || 3000, function(){
    console.log("server is listening on port 3000");
  });
