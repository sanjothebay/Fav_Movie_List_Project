const mongoose = require("mongoose");
const title = new mongoose.Schema({
  title: String,
  poster_path: String,
  popularity: String,
  release_date: String,
});

module.exports = mongoose.model("Title", title);
