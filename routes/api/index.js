const router = require("express").Router();
const contentsRoutes = require("./contents");
const adminRoutes = require("./admin");

// Contents routes
router.use("/contents", contentsRoutes);

// admin routes
router.use("/admin", adminRoutes);

module.exports = router;
