const router = require("express").Router();
const shindigsRoutes = require("./shindigs");
const usersRoutes = require("./users");

// Shindig routes
router.use("/shindig", shindigsRoutes);

// User routes
router.use("/user", usersRoutes);

module.exports = router;