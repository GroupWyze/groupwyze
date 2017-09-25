const router = require("express").Router();
const shindigsRoutes = require("./shindigs");

// Shindig routes
router.use("/shindig", shindigsRoutes);

module.exports = router;