var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function (req, res) {
    burger.all(function (results) {
        var handlebarObject = {
            burgers: results
        };
        console.log(handlebarObject);
        res.render("index", handlebarObject)
    })
})

router.post("/api/burgers", function (req, res) {
    burger.create([
        "name", "eaten"
    ], [
        req.body.name, req.body.eaten
    ], function (results) {
        res.json({
            id: results.insertId
        })
    })
})

router.put("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition",condition);

    burger.update({
        eaten: req.body.eaten,
    }, condition, function (results) {
        if (results.changedRows == 0) {
            console.log("This ID does not exist");
            res.status(404).end();
           

        } else {
            console.log("updated");
            res.status(200).end();
           
        }
    })
})

router.delete("/api/burgers/:id", function (req, res){
    var condition = "id = " + req.params.id;

    burger.delete(condition, function(results){
        if (results.affectedRows==0){
            return res.status(404).end();
        } else {
            res.status(200).end()
        }
    })
})



module.exports = router;