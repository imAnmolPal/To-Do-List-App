const express = require("express"); // installed packages
const bodyParser = require("body-parser");
//const date = require(__dirname + "/date.js"); // this will require the module date.js
// console.log(date());

const app = express(); // app constant by using express

app.set("view engine", "ejs"); // tells our app to use EJS as its view engine. Always after declaring "app".


app.get("/", function(req, res){


    var today = new Date();
    // var currentDay = today.getDay();


    var currentDay = today.getDay();
    var day = "";

    switch (currentDay) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
        default:
            console.log("Error: current day is equal to: " + currentDay);
    }

    // if (currentDay === 6 || currentDay=== 0) { // getDay returns the day of the week, 0-Sunday to 6-Saturday
    //     res.write("<h1>Yaaay it's the weekend!</h1>");
    // } else {
    //     res.write("<p>It is not the weekend</p>");
    //     res.write("<h1>Boo! I have to work!</h1>");
    //     res.send();
    // }

    res.render("list", {kindOfDay: day});
});

app.listen(3000, function () {
  console.log("Server is running on port 3000");
});
