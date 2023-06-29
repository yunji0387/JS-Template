# JS Template File
### Table of Contents
<details open>
<summary><b>(click to expand/hide)</b></summary>
<!-- MarkdownTOC -->
    
1. [NodeJS Template](#node_section)
2. [JQuery Template](#jquery_section)
3. [ReactJS Template](#react_section)

<!-- /MarkdownTOC -->
</details>

<a id="node_section"></a>
## NodeJS Template File

### included libraries : express, body-parser, ejs, lodash, mongoose, dotenv
### include request methods: get, post, listen
---
### Initial project creation
1. create a folder, and switch to the folder directory
    ```bash
      mkdir <folder name>
    ```
    ```bash
      cd <folder name>
    ```
2. create required files (in the folder)
    ```bash
      touch app.js
    ```
    ```bash
      mkdir views
    ```
    ```bash
      cd views
    ```
    ```bash
      touch home.ejs header.ejs footer.ejs
    ```
3. initialize npm and install required npm libraries (in the folder)
    ```bash
      npm init
    ```
    ```bash
      npm i express body-parser ejs lodash mongoose dotenv
    ```
### other useful functions
#### render specific ejs files in nodejs request function
```javascript
res.render("filename");
```
```javascript
res.render("filename", {<var1 in ejs>: <var1 in js>, <var2 in ejs>: <var2 in js>});
```
  - calling variable in ejs
    ```html
    <%= variablename %>
    ```
#### writing function in ejs file (**must use <% and %> to cover every js code**)
```html
<% for(let i=0; i<newListItems.length ; i++){ %>
            <div class="item">
                <input type="checkbox">
                <p>
                    <%= newListItems[i] %>
                </p>
            </div>
        <% } %>
```
#### calling other ejs file to render in current ejs file
- in this case the header.ejs will render before the div element and footer.ejs will render after the div element
```html
<%- include("header") -%>
<div class="box" id="heading">
   <h1>It's <%= listTitle %>!</h1>
</div>
<%- include("footer") -%>
```
#### module.exports
 - import Strings/Objects/Functions
   ```javascript
   let example = require('path/filename.js');
   ```
 - export functions
   ```javascript
   module.exports.<function name> = function() {
    ... code ...
    return variable/object;
   };
   ```
 - export functions in bulk
   ```javascript
   function example1(){
   }
   function example2(){
   }
   module.exports = {
    example1,
    example2
   }
   ```
#### get the value in url
```javascript
app.get("/posts/:postName", function(req, res){
console.log(req.params.postName);
});
```
#### find one of the key-value in a object array
1. some()
    - return type : boolean value
    ```javascript
    if(array.some(item => item.title === req.params.ItemName)){
        console.log("Match Found");
    }
    ```
2. find()
    - return type : object
    ```javascript
    let foundItem = array.find(item => item.title === req.params.ItemName);
    if(foundItem){
        console.log(foundItem.title);
    }
    ```
#### use .env to hide private information(ex. API key)
1. install dotenv package if have bot install already, and create a .env file
   ```bash
      npm i dotenv
   ``` 
   ```bash
      touch .env
   ```
2. Store private information in .env
   ```javascript
     API_KEY = 00000000000
   ```
3. Calling private information in javascript file
   ```javascript
     require("dotenv").config();
   ```
   ```javascript
     let example = process.env.API_KEY;
   ```
#### using https get request
```javascript
    const https = require("https"); //make sure to include library, it is a built-in nodejs library so we don't have to npm install it.
    const exampleAPI_URL = "https://api.exampleapi.com/key?=value";
    https.get(exampleAPI_URL, function(res){
        console.log(res.statusCode); //get the status code
        res.on("data", function(data){
            const weatherData = JSON.parse(data); // JSON.parse will convert the response data from hex format to json format
            console.log(weatherData);
            //JSON.stringify(weatherData); //this will turn weatherData from object to string
        });
    });
```

<a id="jquery_section"></a>
## JQuery Template File
coming soon ...

<a id="react_section"></a>
## React Template File
coming soon ...
