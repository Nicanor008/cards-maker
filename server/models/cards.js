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
    type: String
  },
  textColor: {
    type: String
  },
  textStyle: {
    type: String
  },
  borderPresent: {
    type: Boolean,
    default: false
  },
  borderStyle: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("cards", CardsSchema);
