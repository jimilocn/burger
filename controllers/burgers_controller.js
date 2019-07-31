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
    ], [req.body.name, req.body.eaten], function (results) {
        res.json({
            id: results.insertId
        })
    })
})

router.put("api/burgers/:id", function (req, res) {
var condition = "id = " +req.params.id;
    burger.update({
    eaten: req.body.eaten,
}, condition, function(results){
    if (results.changedRows === 0 ){
        res.status(404).end();
        console.log("This ID does not exist");
   
    } else{
        res.status(200).end();
        console.log("updated");
    }
})
})



module.exports = router;