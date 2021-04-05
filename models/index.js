const mongoose = require("mongoose");

var Schema = mongoose.Schema;

const star = new Schema({
  star: String,
});

module.exports = mongoose.model("Star", star);

const title = new Schema({
  title: String,
  poster_path: String,
  popularity: String,
  release_date: String,
  vote_average: String,
  star: [
    {
      type: Schema.Types.ObjectId,
      ref: "star",
    },
  ],
});

module.exports = mongoose.model("Title", title);
