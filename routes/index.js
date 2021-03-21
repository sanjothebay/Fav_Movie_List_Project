var express = require("express");
var router = express.Router();
const Title = require("../models/index");


// home page 
router.get("/", function(req, res, next ) {
    res.render("index", {title: " Cool,  MOvies!", condition: true, anyArray: [1,2,3] });
    
});

router.get("/get-data", function(req, res, next) {
   
    
});

// router.post("/insert", function(req, res, next) {
//     var item = {
//         title: req.body.title
//     };
//     console.log(item)
//     mongoose.connect(url, function (err, db) {
//         assert.equal(null, err);
//         db.collection("user-data").insertOne(item, function(err, result) {
//             console.log("item Inserted")
//             db.close()
            
//         } );
//     })
//     res.redirect("/")
// });


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
  res.send(req.title); // The req.title stores the entire user that has been authenticated inside of it.
});
  

module.exports = router;



