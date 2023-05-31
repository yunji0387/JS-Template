# NodeJS Template File
### included libraries : express, body-parser, ejs
### include request methods: get, post, listen
---
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
#### get the value in url
```javascript
app.get("/posts/:postName", function(req, res){
console.log(req.params.postName);
});
```
#### find one of the key-value in a object array
```javascript
if(array.some(item => item.title === req.params.ItemName)){
    console.log("Match Found");
}
```
