//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public")); //for accessing the standar file structure, example : public/css

app.get("/", function(req, res){
    res.send("Get - Hello World");
});

app.post("/", function(req, res){
    res.send("Post - Hello World"); 
 });

app.listen(3000, function(){
    console.log("Server started on port 3000");
});

