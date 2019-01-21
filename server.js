// DEPENDENCIES
// packages that we will use to give our server useful functionality
const path = require("path");
const bodyParser = require("body-parser");
const express = require("express");

// EXPRESS
// This sets up the basic properties for our express server


// Tells node that we are creating an "express" server
const app = express();

// Sets an initial port. We"ll use this later in our listener

let PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


let data = require("./app/data/friends.js");

// ROUTER
// The below points server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
require("./app/routing/apiRoutes")(app, data);
require("./app/routing/htmlRoutes")(app, path);


// LISTENER
// The below code effectively "starts" the server

app.listen(PORT, function(){
  console.log("App listening on PORT" + PORT);
})