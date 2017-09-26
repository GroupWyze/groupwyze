const router = require("express").Router();
// const shindigsController = require("../../controllers/shindigsController");

router.param(':shindig_id', function (req, res, next, id) {
  //TODO: determin if user has access to this shindig (i.e. event-user id associated with user id)
  console.log("param yep yep");
  next();
});

router.route('/')
  .all(function (req, res, next) {
    // runs for all HTTP verbs first
    // think of it as route specific middleware!
    next();
  })
  .get(function (req, res, next) {
    res.json("boop");
  })
  .put(function (req, res, next) {
    next(new Error('not implemented'));
  })
  .post(function (req, res, next) {
    next(new Error('not implemented'));
  })
  .delete(function (req, res, next) {
    next(new Error('not implemented'));
  });

router.route('/:shindig_id')
  .all(function (req, res, next) {
    // runs for all HTTP verbs first
    // think of it as route specific middleware!
    console.log("shindig id: " + req.params.shindig_id);
    next();
  })
  .get(function (req, res, next) {
    res.json("booper");
  })
  .put(function (req, res, next) {
    next(new Error('not implemented'));
  })
  .post(function (req, res, next) {
    next(new Error('not implemented'));
  })
  .delete(function (req, res, next) {
    next(new Error('not implemented'));
  });



module.exports = router;