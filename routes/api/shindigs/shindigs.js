const router = require("express").Router();

router.route('/')
  .all(function (req, res, next) {
    // runs for all HTTP verbs first
    // think of it as route specific middleware!
    next();
  })
  .get(function (req, res, next) {
    res.json("return all shindigs");
  })
  .post(function (req, res, next) {

    res.json("create new shindig");
  });

router.route('/:shindig_id')
  .all(function (req, res, next) {
    // runs for all HTTP verbs first
    // think of it as route specific middleware!
    console.log("shindig id: " + req.params.shindig_id);
    next();
  })
  .get(function (req, res, next) {
    res.json("get " + req.params.shindig_id + " shindig");
  })
  .put(function (req, res, next) {
    res.json("update " + req.params.shindig_id + " shindig");
  })
  .delete(function (req, res, next) {
    res.json("delete " + req.params.shindig_id + " shindig");
  });

module.exports = router;