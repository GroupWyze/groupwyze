const router = require("express").Router();

router.route('/')
  .all(function (req, res, next) {
    // runs for all HTTP verbs first
    // think of it as route specific middleware!
    console.log("user route");
    next();
  })
  .get(function (req, res, next) {
    res.json("get all users");
  })
  .post(function (req, res, next) {
    res.json("create new user");
  });

router.route('/:user_id')
  .all(function (req, res, next) {
    // runs for all HTTP verbs first
    // think of it as route specific middleware!
    console.log("user id: " + req.params.user_id + " route");
    next();
  })
  .get(function (req, res, next) {
    res.json("get " + req.params.user_id + " user");
  })
  .put(function (req, res, next) {
    res.json("update " + req.params.user_id + " user");
  })
  .delete(function (req, res, next) {
    res.json("delete " + req.params.user_id + " user");
  });

router.route('/:user_id/shindigs')
  .all(function (req, res, next) {
    // runs for all HTTP verbs first
    // think of it as route specific middleware!
    next();
  })
  .get(function (req, res, next) {
    res.json("return all shindigs for the user");
  });

router.route('/:user_id/shindigs/:shindig_id')
  .all(function (req, res, next) {
    // runs for all HTTP verbs first
    // think of it as route specific middleware!
    console.log("shindig id: " + req.params.shindig_id);
    next();
  })
  .put(function (req, res, next) {
    res.json("add new shindig to the user");
  })
  .delete(function (req, res, next) {
    console.log(req);
    res.json("delete " + req.params.shindig_id + " shindig from user " + req.params.user_id);
  });


module.exports = router;