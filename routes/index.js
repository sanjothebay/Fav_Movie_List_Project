const title = require("../models/index");
var express = require("express");
var router = express.Router();
var mongo = require("mongodb");
var assert = require("assert");

var url = "mongodb://localhost/favourite_movie_list"


// home page 
router.get("/", function(req, res, next ) {
    res.render("index", {title: " Cool,  MOvies!", condition: true, anyArray: [1,2,3] });
    
});

router.get("/get-data", function(req, res, next) {
   
    
});

router.post("/insert", function(req, res, next) {
    var item = {
        title: req.body.title
    };
    console.log(item)
    mongo.connect(url, function (err, title) {
        assert.equal(null, err);
        title.collection("user-data").insertOne(item, function(err, result) {
            console.log("item Inserted")
            title.close()
            
        } );
    })
    res.redirect("/")
});


module.exports = router;



