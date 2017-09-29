const router = require("express").Router();
const shindigsRoutes = require("./shindigs.js");
const categoriesRoutes = require("./categories");
const usersRoutes = require("./users");

router.param(':shindig_id', function (req, res, next, id) {
    //TODO: determin if user has access to this shindig (i.e. event-user id associated with user id)
    console.log("determine if user has access to shindig");
    next();
});

// Shindig routes
router.use("/", shindigsRoutes);

//Categories routes
router.use("/:shindig_id/category", categoriesRoutes);

//Shindig User routes
router.use("/:shindig_id/user", usersRoutes);

module.exports = router;