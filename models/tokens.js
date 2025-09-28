const mongoose = require("mongoose");

const tokenSchema = new mongoose.Schema({
  tokens: {
    type: [String],   // array of strings
    required: true,
    default: []
  }
});

module.exports = mongoose.model("Token", tokenSchema);