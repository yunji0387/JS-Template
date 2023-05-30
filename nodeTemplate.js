//jshint esversion:6

//importing libraries
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express(); //creating express application
app.set('view engine', 'ejs'); //setting view engine to ejs
app.use(bodyParser.urlencoded({extended:true})); // Middleware for parsing URL-encoded request bodies
app.use(express.static("public")); //for accessing the standar file structure, example : public/css

app.get("/", function(req, res){ // Handling GET request to the root route ("/")
    res.send("Get - Hello World");
});

app.post("/", function(req, res){ // Handling POST request to the root route ("/")
    res.send("Post - Hello World"); 
 });

app.listen(3000, function(){ // Starting the server and listening on port 3000
    console.log("Server started on port 3000");
});

