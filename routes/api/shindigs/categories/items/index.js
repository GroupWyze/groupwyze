const router = require("express").Router();
const itemsRoutes = require("./items");
const votesRoutes = require("./votes");

router.param(':item_id', function (req, res, next, id) {
  //TODO: determin if user has access to this item (i.e. event-user id associated with user id)
  console.log("overall item verification?");
  next();
});

// Items routes
router.use("/", itemsRoutes);

//Votes routes
router.use("/:item_id/vote", votesRoutes);

module.exports = router;