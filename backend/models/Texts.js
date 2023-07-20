const mongoose = require("mongoose");


const textSchema = new mongoose.Schema({
  number: { type: Number, required: true },
  text: { type: String, required: true, unique: true},
  difficulty: { type: String, required: true }
});


module.exports = mongoose.model("Text", textSchema);
