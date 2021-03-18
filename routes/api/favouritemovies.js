const router = require("express").Router();
const favouritemoviesController = require("../../controllers/favouritemoviesController");

// Matches with "/api/books"
router
  .route("/")
  .get(favouritemoviesController.findAll)
  .post(favouritemoviesController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(favouritemoviesController.findById)
  .put(favouritemoviesController.update)
  .delete(favouritemoviesController.remove);

module.exports = router;
