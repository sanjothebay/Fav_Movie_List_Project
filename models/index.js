const mongoose = require("mongoose");
const title = new mongoose.Schema({
title: String,
});

module.exports = mongoose.model("Title", title);