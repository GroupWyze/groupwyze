const router = require("express").Router();
const shindigUserRoutes = require("./users");

router.param(':user_id', function (req, res, next, id) {
  //TODO: determin if user has access to this  (i.e. event-user id associated with user id)
  console.log("overall category verification?");
  next();
});

// Shindig User routes
router.use("/", shindigUserRoutes);

module.exports = router;