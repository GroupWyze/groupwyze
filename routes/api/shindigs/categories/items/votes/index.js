const router = require("express").Router();

// Votes routes
router.route('/')
    .all(function (req, res, next) {
        // runs for all HTTP verbs first
        // think of it as route specific middleware!
        console.log("vote route");
        next();
    })
    .get(function (req, res, next) {
        res.json("get all votes for an item");
    })
    .post(function (req, res, next) {
        res.json("create new vote for an item");
    });

module.exports = router;