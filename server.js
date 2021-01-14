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
    id: 2000,
  },
];
// CREATE AN ARRAY FOR WAITLIST
var waitList = [
  {
    name: "Yoda",
    phone: "Jedi Master",
    email: 900,
    id: 2000,
  },
];
// ARRAYS OF OBJECTS. OBJECTS SHOULD HAVE
// NAME
// PHONE
// EMAIL
// ID
// HTML ROUTES
// Basic route that sends the user first to the AJAX Page

// ROUTE FOR HOME
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "views", "home.html"));
});

// ROUTE FOR TABLES
app.get("/tables", function (req, res) {
  res.sendFile(path.join(__dirname, "views", "tables.html"));
});

// // ROUTE FOR RESERVE
app.get("/reserve", function (req, res) {
  res.sendFile(path.join(__dirname, "reserve", "reserve.html"));
});
// API ROUTES

// GET ALL TABLE DATA
app.get("/api/tables", function (req, res) {
  return res.json(tables);
});
// CREATE A TABLE/RESERVATION
app.post("/api/tables", function (req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newTables = req.body;

  // Using a RegEx Pattern to remove spaces from newTables
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newTables.routeName = newTables.name.replace(/\s+/g, "").toLowerCase();

  console.log(newTables);

  characters.push(newTables);

  res.json(newTables);
});

// LISTEN ON THE PORT
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
