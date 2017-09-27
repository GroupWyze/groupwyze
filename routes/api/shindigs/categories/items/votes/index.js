const router = require("express").Router();
var db = require("../../../../../../models");

// Votes routes
router.route('/')
    .all(function (req, res, next) {
        // runs for all HTTP verbs first
        // think of it as route specific middleware!
        console.log("vote route");
        req.body.ItemId = req.baseUrl.substring(req.baseUrl.indexOf("item/") + 5, req.baseUrl.indexOf("/vote"));

        next();
    })
    .get(function (req, res, next) {
        db.Vote.findAll({
            where: {
                ItemId: req.body.ItemId
            }
        }).then(function (dbVote) {
            res.json(dbVote);
        });
    })
    .post(function (req, res, next) {
        db.Vote.create(req.body).then(function (dbVote) {
            res.json(dbVote);
        });
    })
    .delete(function (req, res, next) {
        db.Vote.destroy({
            where: {
                ItemId: req.body.ItemId,
                //TODO: add user id here as well
            }
        }).then(function (dbItem) {
            res.json(dbItem);
        });
    });

module.exports = router;