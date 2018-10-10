var express = require("express");
var burger = require("../models/burger.js");
// console.log(burger);
var router = express.Router();



// Route to get all the burgers
router.get("/", function (req, res) {
    burger.all(function (burgerData) {
        // console.log(data);
        res.render("index", { burgerData });
        // console.log(burgerRendered);
    });
});

router.get("/api/burgers", function (req, res) {
    burger.all(function (burgerData) {
        res.json(burgerData);
    });
});


// Route to create another burger
router.post('/burgers/create', function (req, res) {
    burger.insert(req.body.burger_name, function (result) {
        res.redirect('/');
    });
});

router.get("/api/burgers/:id", function (req, res) {
    // console.log(req.params.id);
    var condition = "id = " + req.params.id;
    burger.one(condition, function (result) {
        res.json(result);
    });
});

router.put("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.update({
        devoured: req.body.devoured
    }, condition, function (result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});


// exporting the router
module.exports = router;