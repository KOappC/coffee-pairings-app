var express = require("express");
var routes = express.Router();
var pool = require("./pg-connection-pool.js");



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
        console.log(result.rows);
    });
});

routes.get("/browse/:flavor", function(req, res) {
    var flavor = req.params;
    var sql = "select * from tasting where bean=$1;";
    var values = [flavor.flavor];
    pool.query(sql, values).then(function(result) {
        res.send(result.rows);
        console.log(result.rows);
    });
});



module.exports = routes;