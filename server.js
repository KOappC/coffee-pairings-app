var express = require("express");
var app = express();
var pg = require("pg");
var bodyParser = require("body-parser");
var routes = require("./routes.js");

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.use("/", routes);

var port = process.env.PORT || 5000;
var server = app.listen(port, function(req, res) {
    console.log("Server is up and running.  Listening on localhost:" + port)
});