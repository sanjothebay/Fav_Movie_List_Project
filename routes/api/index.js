const router = require("express").Router();
const movieRoutes = require("./favouritemovies");

// Book routes
router.use("/favouritemovies", movieRoutes);

module.exports = router;
