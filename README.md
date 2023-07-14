# JS Template File
### Table of Contents
<details open>
<summary><b>(click to expand/hide)</b></summary>
<!-- MarkdownTOC -->
    
1. [NodeJS Functions](#node_section)
2. [JQuery Functions](#jquery_section)
3. [ReactJS Functions](#react_section)
4. [JS Functions](#js_section)

<!-- /MarkdownTOC -->
</details>

<a id="node_section"></a>
## NodeJS Functions

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
#### connect to mongo server and call mongo find function
```javascript
async function getInfoDB() {
  let result;
  try {
    await mongoose.connect("mongodb+srv://" + process.env.MONGO_USERNAME + ":" + process.env.MONGO_PS + "@cluster0.6gezmfg.mongodb.net/<db name>", { useNewURLParser: true });
    result = await <collection name>.find({});
    mongoose.connection.close();
  } catch (err) {
    console.error(err);
    mongoose.connection.close();
  }
  return result;
}
```
---

<a id="jquery_section"></a>
## JQuery Functions
### Import jquery libraries in html
- Include jquery cdn libraris
```html
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
```
- Include jquery custom js script file
```html
<script src="./<path>/<script file name>.js"></script>
```
### jquery ajax get method
```javascript
function functionName() {
  // Fetch and process data
  $.ajax({
    url: "/<pathname>",
    method: "GET",
    async:false, //disallow concurrent running
    success: function (data) {
      function2Name(data);
    },
    error: function () {
      console.log("An error occurred accessing stock info data");
        function3Name();
    },
    complete: function () {
      function4Name();
    }
  });

  // Fetch and process data
  $.ajax({
    url: "/<pathname2>",
    method: "GET",
    async:false, //disallow concurrent running
    success: function (data) {
      function5Name(data);
    },
    error: function () {
      console.log("An error occurred accessing stock info data");
        function6Name();
    },
    complete: function () {
      function7Name();
    }
  });
}

$(document).ready(function () {
  setTimeout(functionName, 1000); // 1000 means delay for 1 second then call function "function"
});
```
---

<a id="react_section"></a>
## React Functions
### Creating React App
- In bash
    ```bash
      npx create-react-app <app name>
    ```
### Start development server
- In bash located into the react app directory
    ```bash
      cd <app name>
    ```
    ```bash
      npm start
    ```
### Upgrade React App version
- In bash located into the react app directory
    ```bash
      cd <app name>
    ```
    ```bash
      npm install react-scripts@latest
    ```
### React in JS file
#### Import react js file in html
```html
<script src="./src/index.js" type="text/jsx"></script>
```
#### Import libraries in js file
```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
```
#### Inject code to an element (ex. div/h1/p)
```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <h1>
    Hello World
  </h1>
);

```
#### Calling js variable in an element (ex. div/h1/p)
```javascript
import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {currentYear}</p>
    </footer>
  );
}

export default Footer;
```
#### React function with parameter (React props)
```javascript
import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.img} alt="avatar_img" />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <h1>My Contacts</h1>
    <Card
      name="Beyonce"
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      tel="+123 456 789"
      email="b@beyonce.com"
    />
    <Card
      name="Jack Bauer"
      img="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
      tel="+7387384587"
      email="jack@nowhere.com"
    />
  </div>,
  document.getElementById("root")
);

```
#### useState function
- const [state, setState] = useState(initialState);
    ```javascript
    import React, { useState } from "react";
    
    function App() {
      const [count, setCount] = useState(0);
    
      function increase() {
        setCount(count + 1);
      }
    
      function decrease() {
        setCount(count - 1);
      }
    
      return (
        <div className="container">
          <h1>{count}</h1>
          <button onClick={decrease}>-</button>
          <button onClick={increase}>+</button>
        </div>
      );
    }
    
    export default App;
    ```
#### Appending element into a state array
```javascript
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems(prevItems => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }
```
#### Adding link to a react component
1. First install react-router-dom
    ```bash
    npm install react-router-dom
    ```
2. In index.js import BrowserRouter
    ```javascript
    import React from 'react';
    import ReactDOM from 'react-dom/client';
    import { BrowserRouter } from 'react-router-dom'
    import App from './App';

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <BrowserRouter>
          <App />
        </BrowserRouter>
    );
    ```
4. Finally add <Link> to the desired react component
   ```javascript
    import React from 'react';
    import { Link } from 'react-router-dom';
    import './GameCard.css';
    
    const GameCard = (props) => {
      return (
        <Link to='/about' className="game-card">
          <img className="game-card__image" src={props.imageUrl} alt={props.imgTitle} />
          <div className="game-card__details">
            <h2 className="game-card__title">{props.title}</h2>
            <p className="game-card__description">{props.description}</p>
          </div>
        </Link>
      );
    };
    
    export default GameCard;
    ```
---

<a id="js_section"></a>
## JS Functions
#### js arrow function
```javascript
//Map -Create a new array by doing something with each item in an array.
// const newNumbers = numbers.map(function (x) {
//   return x * 2;
// });
// is same as
const newNumbers = numbers.map( x => x * 2);

//Find - find the first item that matches from an array.
// const newNumber = numbers.find(function (num) {
//   return num > 10;
// })
const newNumber = numbers.find(num => num > 10);
```
#### js es6 Spread Operator
```javascript
 const citrus = ["Lime", "Lemon", "Orange"];
 const fruits = ["Apple", ...citrus, "Banana", "Coconut"];

 const fullName = {
   fName: "James",
   lName: "Bond"
 };

 const user = {
   ...fullName,
   id: 1,
   username: "jamesbond007"
 };

 console.log(user);
// console : Object {fName: "James", lName: "Bond", id: 1, username: "jamesbond007"}
```
#### js Ternary Operator (It is an Expression)
- Condition ? Do if True : Do if False
- Example : isEmpty === true ? addFunction() : removeFunction()
  - If we want one of the condition to do nothing, simply set it to null or use && operator
      - isEmpty === true ? addFunction() : null
      - isEmpty === true && addFunction()
1. example 1 (In JavaScript)
   ```javascript
    function getFee(isMember) {
      return (isMember ? '$2.00' : '$10.00');
    }
    
    console.log(getFee(true));
    // Expected output: "$2.00"
    
    console.log(getFee(false));
    // Expected output: "$10.00"
    
    console.log(getFee(null));
    // Expected output: "$10.00"
    ``` 
3. example 2 (In React JavaScript)
   ```javascript
    import React from "react";
    import Login from "./Login";
    
    var isLoggedIn = false;
    
    const currentTime = new Date(2019, 11, 1, 9).getHours();
    console.log(currentTime);
    
    function App() {
      return (
        <div className="container">
          {/*Ternary Operator*/}
          {isLoggedIn ? <h1>Hello</h1> : <Login />}
          {/*AND Operator*/}
          {currentTime > 12 && <h1>Why are you still working?</h1>}
        </div>
      );
    }
    
    export default App;
    ```
#### js map function
1. example 1
    ```javascript
    const array1 = [1, 4, 9, 16];
    
    // Pass a function to map
    const map1 = array1.map(x => x * 2);
    
    console.log(map1);
    // Expected output: Array [2, 8, 18, 32]
    
    ```
2. example 2
    ```javascript
    // in emojipedia.js
    const emojipedia = [
      {
        id: 1,
        emoji: "💪",
        name: "Tense Biceps",
        meaning:
          "“You can do that!” or “I feel strong!” Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym."
      },
      {
        id: 2,
        emoji: "🙏",
        name: "Person With Folded Hands",
        meaning:
          "Two hands pressed together. Is currently very introverted, saying a prayer, or hoping for enlightenment. Is also used as a “high five” or to say thank you."
      },
      {
        id: 3,
        emoji: "🤣",
        name: "Rolling On The Floor, Laughing",
        meaning:
          "This is funny! A smiley face, rolling on the floor, laughing. The face is laughing boundlessly. The emoji version of “rofl“. Stands for „rolling on the floor, laughing“."
      },
      {
        id: 4,
        emoji: "🤓",
        name: "Nerd Face",
        meaning:
          "Huge glasses, awkward smile and buck teeth. Used humorously or ironically for nerds or to express how smart you are. Stereotype of a nerd; a smart but funny-dressed person with social deficits."
      }
    ];
    
    export default emojipedia;
    ```
    ```javascript
    // in App.js
    import React from "react";
    import Entry from "./Entry";
    import emojipedia from "../emojipedia";
    
    function createEntry(emojiTerm) {
      return (
        <Entry
          key={emojiTerm.id}
          emoji={emojiTerm.emoji}
          name={emojiTerm.name}
          description={emojiTerm.meaning}
        />
      );
    }
    
    function App() {
      return (
        <div>
          <h1>
            <span>emojipedia</span>
          </h1>
          <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
        </div>
      );
    }
    
    export default App;
    ```
#### js filter function
```javascript
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]
```
#### js reduce function
```javascript
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(sumWithInitial);
// Expected output: 10
```
#### js find function (return the first element that satisfied the condition)
```javascript
const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);

console.log(found);
// Expected output: 12
```
#### js findIndex function (return the first element's index that satisfied the condition)
```javascript
const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(array1.findIndex(isLargeNumber));
// Expected output: 3
```
