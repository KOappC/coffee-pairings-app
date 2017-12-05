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

routes.get("/beans/:flavor", function(req, res) {
    console.log(req.params);
    var flavor = req.params;
    var sql = "select * from tasting where narrow1=$1 or narrow2=$1;";
    var values = [flavor.flavor];
    pool.query(sql, values).then(function(result) {
        console.log(result.rows);
        res.send(result.rows);
    });
});


module.exports = routes;