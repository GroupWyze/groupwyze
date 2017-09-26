const router = require("express").Router();
const categoriesRoutes = require("./categories");
const itemsRoutes = require("./items");

router.param(':category_id', function (req, res, next, id) {
  //TODO: determin if user has access to this  (i.e. event-user id associated with user id)
  console.log("overall category verification?");
  next();
});

// Category routes
router.use("/", categoriesRoutes);

//Items routes
router.use("/:category_id/items", itemsRoutes);

module.exports = router;