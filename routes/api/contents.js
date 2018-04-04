
const router = require("express").Router();
const inspirationController = require("../../controllers/inspirationController");

/**
 * Find all website main content
*/
router
  .route("/")
  .get(inspirationController.findAll);

/**
 * For admin to update contents table ???
*/  
router
  .route("/AdminDashboard")
  .put(inspirationController.update);

// May have to add this for admin to create a 
// new row, for adding a new section
// .route("/AdminDashboard")
//.post(inspirationController.createSection);

module.exports = router;

  