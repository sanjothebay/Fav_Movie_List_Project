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

router.delete('/delete/:_id', function (req, res) {
  Title.findOneAndDelete({ id: req.params._id })
    .then((docs) => {
      if (!docs) {
        return res.status(404).json({ message: 'No title with this id!' });
      }
    })
    .then(() => {
      res.json({ message: 'Title deleted!' });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});


router.post("/insert", (req, res) => {
  Title.findOne({ title: req.body.title }, async (err, doc) => {
    if (err) throw err;
    if (doc) res.send("Movie Already Exists");

    const {
      title,
      poster_path,
      popularity,
      release_date,
      vote_average,
    } = req.body;

    const newTitle = new Title({
      title,
      poster_path,
      popularity,
      release_date,
      vote_average,
    });
    console.log(newTitle);
    await newTitle.save();
    res.send("Movie Created");
  });
});
router.get("/insert", (req, res) => {
  res.send(req.user); // The req.user stores the entire user that has been authenticated inside of it.
});

module.exports = router;
