const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  dateCreated: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Item", itemSchema);
