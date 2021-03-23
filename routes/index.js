var express = require("express");
var router = express.Router();
const Title = require("../models/index");

// home page
router.get("/", function (req, res, next) {
  res.render("index", {
    title: " Cool,  MOvies!",
    condition: true,
    anyArray: [1, 2, 3],
  });
});

router.get("/get-data", function (req, res) {
  console.log(req.body)
  Title.find({ title: req.body.title },function(err, docs) {
    if(err)res.json(err);
    else res.send({ title: req.body.title })
  });
});

router.post("/insert", (req, res) => {
  Title.findOne({ title: req.body.title }, async (err, doc) => {
    if (err) throw err;
    if (doc) res.send("Movie Already Exists");

    const newTitle = new Title({
      title: req.body.title,
    });
    await newTitle.save();
    res.send("Movie Created");
  });
});
router.get("/insert", (req, res) => {
  res.send(req.user); // The req.user stores the entire user that has been authenticated inside of it.
});

module.exports = router;
