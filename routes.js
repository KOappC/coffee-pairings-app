var express = require("express");
var routes = express.Router();
var pool = require("./pg-connection-pool.js");


/*routes.get("/flavors", function(req, res) {
    res.send("GET done");
    console.log("GET has completed successfully");
});

routes.post("/flavors", function(req, res) {
    res.send("POST done");
    console.log("POST has completed successfully");
});

routes.put("/flavors/:id", function(req, res) {
    res.send("PUT done");
    console.log("PUT has completed successfully");
});

routes.delete("/flavors/:id", function(req,res) {
    res.send("DELETE done, oh no!");
    console.log("DELETE has completed successfully");
});*/
routes.get("/flavors", function(req, res) {
    pool.query("select DISTINCT bean from tasting").then(function(result) {
        res.send(result.rows);
        var beans = [result.rows];
    });
});

routes.get("/beans/:flavor", function(req, res) {
    var flavor = req.params;
    var sql = "select * from tasting where narrow1=$1 or narrow2=$1;";
    var values = [flavor.flavor];
    pool.query(sql, values).then(function(result) {
        res.send(result.rows);
    });
});



module.exports = routes;