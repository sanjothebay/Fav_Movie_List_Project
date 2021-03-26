var express = require("express");
var router = express.Router();
const Title = require("../models/index");

router.get("/get-data", function (req, res) {
  Title.find(function (err, docs) {
    if (err) res.json(doc);
    res.send({ docs });
    console.log("Logging titles:", docs);
  });
});

router.post("/insert", (req, res) => {
  Title.findOne({ title: req.body.title }, async (err, doc) => {
    if (err) throw err;
    if (doc) res.send("Movie Already Exists");

    const {title, poster_path, popularity, release_date } = req.body;

    const newTitle = new Title({
      title,
      poster_path,
      popularity,
      release_date,
      
    });
    console.log(newTitle)
    await newTitle.save();
    res.send("Movie Created");
  });
});
router.get("/insert", (req, res) => {
  res.send(req.user); // The req.user stores the entire user that has been authenticated inside of it.
});

module.exports = router;
