const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    productname:String,
    productdescription:String,
    price:Number,
    ImageURL:String
})

const usermodel = mongoose.model("Dashboard_items",userSchema);

module.exports = usermodel;