const router = require("express").Router();
var db = require("../../../models");

router.route('/')
  .all(function(req, res, next) {
    // runs for all HTTP verbs first
    // think of it as route specific middleware!
    next();
  })
  .get(function(req, res, next) {
    //TODO: should return all shindigs for user
    db.Shindig.findAll({}).then(function(dbShindig) {
      res.json(dbShindig);
    });
  })
  .post(function(req, res, next) {
    console.log(req);
    db.Shindig.create(req.body).then(function(dbShindig) {
      res.json(dbShindig);
    });
  });

router.route('/:shindig_id')
  .all(function(req, res, next) {
    // runs for all HTTP verbs first
    // think of it as route specific middleware!
    console.log("shindig id: " + req.params.shindig_id);
    next();
  })
  .get(function(req, res, next) {
    db.Shindig.findOne({
      where: {
        id: req.params.shindig_id
      }
    }).then(function(dbShindig) {
      res.json(dbShindig);
    });
  })
  .put(function(req, res, next) {
    db.Shindig.update(
      req.body,
      {
        where: {
          id: req.params.shindig_id
        }
      }).then(function(dbShindig) {
      db.Shindig.findOne({
        where: {
          id: req.params.shindig_id
        }
      }).then(function(dbShindig) {
        res.json(dbShindig);
      });
    });
  })
  .delete(function(req, res, next) {
    db.Shindig.destroy({
      where: {
        id: req.params.shindig_id
      }
    }).then(function(dbShindig) {
      res.json(dbShindig);
    });
  });

module.exports = router;