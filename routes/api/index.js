const router = require("express").Router();
const shindigsRoutes = require("./shindigs");
const usersRoutes = require("./users");

// Shindig routes
router.use("/shindigs", shindigsRoutes);

// User routes
router.use("/users", usersRoutes);

module.exports = router;