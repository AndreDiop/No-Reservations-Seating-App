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
    customerName: "Andre",
    phoneNumber: 4048490928,
    customerEmail: "Andre@gmail.com",
    customerID: 1,
  },
];
// CREATE AN ARRAY FOR WAITLIST
var waitlist = [
  {
    customerName: "Chelsea",
    phoneNumber: 4048674334,
    customerEmail: "Chelsea@gmail.com",
    customerID: 1,
  },
];
// ARRAYS OF OBJECTS. OBJECTS SHOULD HAVE
// NAME
// PHONE
// EMAIL
// ID
// HTML ROUTES

// API ROUTES
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
  res.sendFile(path.join(__dirname, "views", "reserve.html"));
});

// GET ALL TABLE DATA
app.get("/api/tables", function (req, res) {
  return res.json(tables);
});
app.get("/api/waitlist", function (req, res) {
  res.json(waitlist);
});

// CREATE A TABLE/RESERVATION
app.post("/api/tables", function (req, res) {
  if (tables.length < 5) {
    tables.push(req.body);
    return res.send(true);
  } else {
    waitlist.push(req.body);
    return res.send(false);
  }
});

// Clear Tables
app.post("/api/clear", function (req, res) {
  tables.splice(0, tables.length);
  waitlist.splice(0, waitlist.length);
  res.json({
    error: false,
    message: "Cleared tables and waitlist",
    data: null,
  });
});

// LISTEN ON THE PORT
app.listen(PORT, function () {
  console.log("No Reservations Table App listening on PORT " + PORT);
});
