var express = require("express");
var app = express();
var pg = require("pg");
var bodyParser = require("body-parser");
var routes = require("./routes.js");

app.use(express.static(__dirname + "./public"));
app.use(bodyParser.json());
app.use("/", routes);

var server = app.listen(8080, function(req, res) {
    var port = server.address().port;
    console.log("Server is up and running.  Listening on local host port :8080")
});