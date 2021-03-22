const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require ("body-parser");
const path = require ("path");

// Database
const db = require('.config/database');

// Test DB
db.authenicate()
  .then(() => console.log("database is working"))
  .catch((err) => console.log(err))

  const app = express;

//   Handlebars
  app.engine("handlebars", exphbs({ defaultLayout: 'main' }));
  app.set('view engine', 'handlebars');

//   Set static folder
app.use(express.static(path.join(__dirname, 'public')));

