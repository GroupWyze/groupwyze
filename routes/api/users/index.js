const router = require("express").Router();
const usersRoutes = require("./users");

router.param(':user_id', function (req, res, next, id) {
  //TODO: determin if user has access to this  (i.e. event-user id associated with user id)
  console.log("overall user verification?");
  next();
});

// User routes
router.use("/", usersRoutes);


module.exports = router;