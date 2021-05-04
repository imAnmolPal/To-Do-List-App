const express = require("express"); // installed packages
const bodyParser = require("body-parser");
//const date = require(__dirname + "/date.js"); // this will require the module date.js
// console.log(date());

const app = express(); // app constant by using express

app.set("view engine", "ejs"); // tells our app to use EJS as its view engine. Always after declaring "app".
