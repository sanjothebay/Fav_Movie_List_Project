const mongoose = require("mongoose");
const title = new mongoose.Schema({
  title: String,
  poster_path: String,
  popularity: String,
  release_date: String,
  vote_average: String,
});

module.exports = mongoose.model("Title", title);
