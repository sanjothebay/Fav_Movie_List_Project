var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const Models = require("../models/index");
var assert = require("assert");

var url = "mongodb://localhost/favourite_movie_list"


// home page 
router.get("/", function(req, res, next ) {
    res.render("index", {title: " Cool,  MOvies!", condition: true, anyArray: [1,2,3] });
    
});

router.get("/get-data", function(req, res, next) {
   
    
});

Model.create("/insert", function(req, res, next) {
    var item = {
        title: req.body.title
    };
    console.log(item)
    mongoose.connect(url, function (err, db) {
        assert.equal(null, err);
        db.collection("user-data").insertOne(item, function(err, result) {
            console.log("item Inserted")
            db.close()
            
        } );
    })
    res.redirect("/")
});


module.exports = router;



