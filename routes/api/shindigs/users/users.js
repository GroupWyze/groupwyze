const router = require("express").Router();
var db = require("../../../../models");

router.route('/')
    .all(function (req, res, next) {
        // runs for all HTTP verbs first
        // think of it as route specific middleware!

        // adding ShindigId to the request body
        req.body.ShindigId = req.baseUrl.substring(req.baseUrl.indexOf("shindig/") + 8, req.baseUrl.indexOf("/user"));
        next();
    })
    .get(function (req, res, next) {
        db.ShindigUser.findAll({
            where: {
                ShindigId: req.body.ShindigId

            },
            include: [{
                model: db.User,
                where: {
                    id: db.Sequelize.col('ShindigUser.UserId'),
                }
            }]
        }).then(function (dbShindigUser) {
            res.json(dbShindigUser);
        });
    });


router.route('/:user_id')
    .all(function (req, res, next) {
        // runs for all HTTP verbs first
        // think of it as route specific middleware!

        // adding ShindigId to the request body
        req.body.ShindigId = req.baseUrl.substring(req.baseUrl.indexOf("shindig/") + 8, req.baseUrl.indexOf("/user"));

        // add User id to the request body
        req.body.UserId = req.params.user_id;
        next();
    })
    .post(function (req, res, next) {
        db.ShindigUser.create(req.body).then(function (dbShindigUser) {
            res.json(dbShindigUser);
        });
    })
    .put(function (req, res, next) {
        db.ShindigUser.update(
            req.body,
            {
                where: {
                    id: req.params.user_id
                }
            }).then(function (dbShindigUser) {
                db.ShindigUser.findOne({
                    where: {
                        id: req.params.user_id
                    }
                }).then(function (dbShindigUser) {
                    res.json(dbShindigUser);
                });
            });
    })
    .delete(function (req, res, next) {
        db.ShindigUser.destroy({
            where: {
                id: req.params.user_id
            }
        }).then(function (dbShindigUser) {
            res.json(dbShindigUser);
        });
    });


module.exports = router;