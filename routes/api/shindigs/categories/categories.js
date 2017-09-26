const router = require("express").Router();

router.route('/')
    .all(function (req, res, next) {
        // runs for all HTTP verbs first
        // think of it as route specific middleware!
        console.log("category route");
        next();
    })
    .get(function (req, res, next) {
        res.json("get all categories");
    })
    .post(function (req, res, next) {
        res.json("create new category");
    });

router.route('/:category_id')
    .all(function (req, res, next) {
        // runs for all HTTP verbs first
        // think of it as route specific middleware!
        console.log("category id: " + req.params.category_id + " route");
        next();
    })
    .get(function (req, res, next) {
        res.json("get " + req.params.category_id + " category");
    })
    .put(function (req, res, next) {
        res.json("update " + req.params.category_id + " category");
    })
    .delete(function (req, res, next) {
        res.json("delete " + req.params.category_id + " category");
    });


module.exports = router;