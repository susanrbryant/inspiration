// *****************************************************************************
// Server.js
// This file is the initial starting point for the Node/Express server.
// ******************************************************************************

// *** Dependencies
// =============================================================
const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");
const db = require("./models");

// *** Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3001;

// *** Sets up the Express App to handle data parsing
// =============================================================
// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// *** Serve up Static Assets
// =============================================================
// x BEFORE IT WAS... app.use(express.static("public"));
app.use(express.static("client/build"));

// *** Add routes for both API and view
// =============================================================
// x BEFORE IT WAS... require('./routing/api-routes.js')(app);
// x BEFORE IT WAS... require('./routing/html-routes.js')(app);
app.use(routes);

// *** Syncing our sequelize models and then starting Express API Server
// =============================================================
// If you change force: false to true. It wipes out the database. 
// You only ever use this for developing/testing
db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
      // x BEFORE IT WAS... console.log("App listening on PORT " + PORT);
      console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
});