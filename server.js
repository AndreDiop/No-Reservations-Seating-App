// REQUIRE EXPRESS
var express = require("express");
var path = require("path");
// CREATE AN INSTANCE OF EXPRESS
var app = express();

// CREATE A PORT FOR THE APP TO RUN
var PORT = 3000;
// BUT ALSO LISTEN TO ENVIRONMENT VARIABLES SO WE CAN DEPLOY TO HEROKU
// ADD MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// COPY/PASTE FROM STAR WARS APP

// CREATE AN ARRAY OF TABLES
var tables = [
    {
      name: "Yoda",
      phone: "Jedi Master",
      email: 900,
      id: 2000
    },
// CREATE AN ARRAY FOR WAITLIST
// ARRAYS OF OBJECTS. OBJECTS SHOULD HAVE
// NAME
// PHONE
// EMAIL
// ID
// HTML ROUTES
// Basic route that sends the user first to the AJAX Page




// ROUTE FOR HOME
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });
  
// ROUTE FOR TABLES
app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
  });

// ROUTE FOR RESERVE
app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
  });
// API ROUTES

// GET ALL TABLE DATA
// CREATE A TABLE/RESERVATION
// LISTEN ON THE PORT

