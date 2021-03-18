const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const favouritemovieSchema = new Schema({
  user: { type: String, required: true },
  title: { type: String, required: true },

});

const FavouriteMovie = mongoose.model("FavouriteMovie", favouritemovieSchema);

module.exports = FavouriteMovie;
