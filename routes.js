var express = require("express");
var routes = express.Router();
var pool = require("./pg-connection-pool.js");


routes.get("/home", function(req, res) {
    res.send("GET done");
    console.log("GET has completed successfully");
});

routes.post("/home", function(req, res) {
    res.send("POST done");
    console.log("POST has completed successfully");
});

routes.put("/home/:id", function(req, res) {
    res.send("PUT done");
    console.log("PUT has completed successfully");
});

routes.delete("/home/:id", function(req,res) {
    res.send("DELETE done, oh no!");
    console.log("DELETE has completed successfully");
});



module.exports = routes;