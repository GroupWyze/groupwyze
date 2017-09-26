const router = require("express").Router();

router.route('/')
    .all(function (req, res, next) {
        // runs for all HTTP verbs first
        // think of it as route specific middleware!
        console.log("item route");
        next();
    })
    .get(function (req, res, next) {
        res.json("get all items for a category");
    })
    .post(function (req, res, next) {
        res.json("create new item for a category");
    });

router.route('/:item_id')
    .all(function (req, res, next) {
        // runs for all HTTP verbs first
        // think of it as route specific middleware!
        console.log("item id: " + req.params.item_id + " route");
        next();
    })
    .get(function (req, res, next) {
        res.json("get " + req.params.item_id + " item");
    })
    .put(function (req, res, next) {
        res.json("update " + req.params.item_id + " item");
    })
    .delete(function (req, res, next) {
        res.json("delete " + req.params.item_id + " item");
    });


module.exports = router;