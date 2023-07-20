// stores the offers peiple are making on a request/product
const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  Id: { type: Number, unique: true,required: true,},
  Players: [{key: { type: String,}, value: { type: String,}}],
});

module.exports = mongoose.model("Room", roomSchema);
