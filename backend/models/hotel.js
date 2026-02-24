const mongoose = require("mongoose");

const HotelSchema = new mongoose.Schema({
  name: String,
  city: String,
  address: String,
  price: Number,
});

module.exports = mongoose.model("Hotel", HotelSchema);
