const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/favourite_movie_list"
);

const movieSeed = [
  {
    title: "Nemo",
  },
  {
    title: "Waking Life",
  },
  {
    title: "Ghostbusters",
  },

];

db.FavouriteMovie
  .remove({})
  .then(() => db.FavouriteMovie.collection.insertMany(movieSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
