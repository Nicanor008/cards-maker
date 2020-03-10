const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CardsSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  backgroundColor: {
    type: String,
    required: true
  },
  textColor: {
    type: String,
    default: false
  },
  textStyle: {
    type: String,
    default: false
  },
  borderStyle: {
    type: String,
    default: false
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("cards", CardsSchema);
