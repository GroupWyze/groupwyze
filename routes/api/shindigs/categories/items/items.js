const router = require("express").Router();
var db = require("../../../../../models");

router.route('/')
    .all(function (req, res, next) {
        // runs for all HTTP verbs first
        // think of it as route specific middleware!
        console.log("item route");

        // adding CategoryId to the request body
        req.body.CategoryId = req.baseUrl.substring(req.baseUrl.indexOf("category/") + 9, req.baseUrl.indexOf("/item"));

        next();
    })
    .get(function (req, res, next) {
        db.Item.findAll({
            where: {
                CategoryId: req.body.CategoryId
            }
        }).then(function (dbItem) {
            res.json(dbItem);
        });
    })
    .post(function (req, res, next) {
        db.Item.create(req.body).then(function (dbItem) {
            res.json(dbItem);
        });
    });

router.route('/:item_id')
    .all(function (req, res, next) {
        // runs for all HTTP verbs first
        // think of it as route specific middleware!
        req.body.CategoryId = req.baseUrl.substring(req.baseUrl.indexOf("category/") + 9, req.baseUrl.indexOf("/item"));
        next();
    })
    .get(function (req, res, next) {
        db.Item.findOne({
            where: {
                id: req.params.item_id
            }
        }).then(function (dbItem) {
            res.json(dbItem);
        });
    })
    .put(function (req, res, next) {
        db.Item.update(
            req.body,
            {
                where: {
                    id: req.params.item_id
                }
            }).then(function (dbItem) {
                db.Item.findOne({
                    where: {
                        id: req.params.item_id
                    }
                }).then(function (dbItem) {
                    res.json(dbItem);
                });
            });
    })
    .delete(function (req, res, next) {
        db.Item.destroy({
            where: {
                id: req.params.item_id
            }
        }).then(function (dbItem) {
            res.json(dbItem);
        });
    });


module.exports = router;