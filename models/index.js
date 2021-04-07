const mongoose = require("mongoose");
var Schema = mongoose.Schema;

const title = new Schema({
  title: String,
  poster_path: String,
  popularity: String,
  release_date: String,
  vote_average: String,
  star: String,
});

module.exports = mongoose.model("Title", title);
