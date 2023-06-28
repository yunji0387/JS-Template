//jshint esversion:6

//importing libraries
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
const date = require(__dirname + "/logic/date.js");
const className = require(__dirname + "/path/fileName.js");

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const app = express(); //creating express application
app.set('view engine', 'ejs'); //setting view engine to ejs
app.use(bodyParser.urlencoded({extended:true})); // Middleware for parsing URL-encoded request bodies
app.use(express.static("public")); //for accessing the standar file structure, example : public/css

app.get("/", function(req, res){ // Handling GET request to the root route ("/")
    res.send("Get - Hello World"); //send text to the page
    res.redirect("/pathName"); // redirect URL to path "/pathName" 
});

app.get("/path", function(req, res){ // Handling GET request to the root route ("/")
    // render and parse variable and function to fileName.ejs
    res.render("/fileName", {varNameInEJSFile: verNameInThisFile, funcNameInEJSFile: className.funcNameInThisFile});
});

app.get("/data", async function (req, res) {
    try {
        const newData = await className.functionName(parameterName);
        res.json(newData); //send json data
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to fetch data." });
    }
});

app.post("/", function(req, res){ // Handling POST request to the root route ("/")
    res.send("Post - Hello World"); 
 });

app.listen(3000, function(){ // Starting the server and listening on port 3000
    console.log("Server started on port 3000");
});

