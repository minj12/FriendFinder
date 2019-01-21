//Routes for html
var path = require("path");

  module.exports = function (app, path) {
    //GET request
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    })
    
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    })
}