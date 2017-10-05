const router = require("express").Router();
var db = require("../../../../models");

router.route('/')
    .all(function (req, res, next) {
        // runs for all HTTP verbs first
        // think of it as route specific middleware!

        // adding ShindigId to the request body
        req.body.ShindigId = req.baseUrl.substring(req.baseUrl.indexOf("shindig/") + 8, req.baseUrl.indexOf("/category"));
        next();
    })
    .get(function (req, res, next) {
        db.Category.findAll({
            where: {
                ShindigId: req.body.ShindigId
            }
        }).then(function (dbCategory) {
            res.json(dbCategory);
        });
    })
    .post(function (req, res, next) {
        db.Category.create(req.body).then(function (dbCategory) {
            res.json(dbCategory);
        });
    });

router.route('/:category_id')
    .all(function (req, res, next) {
        // runs for all HTTP verbs first
        // think of it as route specific middleware!

        // adding ShindigId to the request body
        req.body.ShindigId = req.baseUrl.substring(req.baseUrl.indexOf("shindig/") + 8, req.baseUrl.indexOf("/category"));

        next();
    })
    .get(function (req, res, next) {
        db.Category.findOne({
            where: {
                id: req.params.category_id
            }
        }).then(function (dbCategory) {
            res.json(dbCategory);
        });
    })
    .put(function (req, res, next) {
        db.Category.update(
            req.body,
            {
                where: {
                    id: req.params.category_id
                }
            }).then(function (dbShindig) {
                db.Category.findOne({
                    where: {
                        id: req.params.category_id
                    }
                }).then(function (dbCategory) {
                    res.json(dbCategory);
                });
            });
    })
    .delete(function (req, res, next) {
        db.Category.destroy({
            where: {
                id: req.params.category_id
            }
        }).then(function (dbCategory) {
            res.json(dbCategory);
        });
    });

router.route('/:category_id/vote')
    .all(function (req, res, next) {
        // runs for all HTTP verbs first
        // think of it as route specific middleware!

        // adding ShindigId to the request body
        req.body.ShindigId = req.baseUrl.substring(req.baseUrl.indexOf("shindig/") + 8, req.baseUrl.indexOf("/category"));

        next();
    })

    // Get all votes for a category grouped by item id
    .get(function (req, res, next) {

        db.Vote.count({
            where: {
                CategoryId: req.params.category_id
            },
            group: ['ItemId'],
            attributes: ['ItemId']
        }).then(c => {
            res.json(c);
        });

    })


module.exports = router;