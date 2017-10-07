const router = require("express").Router();
const shindigsRoutes = require("./shindigs");
const usersRoutes = require("./users");
const yelpRoutes = require("./yelp");

// Shindig routes
router.use("/shindig", shindigsRoutes);

// User routes
router.use("/user", usersRoutes);

// Yelp routes
router.use("/yelp", yelpRoutes);

module.exports = router;