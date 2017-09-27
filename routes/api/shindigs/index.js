const router = require("express").Router();
const shindigsRoutes = require("./shindigs.js");
const categoriesRoutes = require("./categories");

router.param(':shindig_id', function (req, res, next, id) {
    //TODO: determin if user has access to this shindig (i.e. event-user id associated with user id)
    console.log("determine if user has access to shindig");
    next();
});

// Shindig routes
router.use("/", shindigsRoutes);

//Categories routes
router.use("/:shindig_id/category", categoriesRoutes);

module.exports = router;