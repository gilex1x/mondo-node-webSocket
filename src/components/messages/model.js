const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const messagesSchema = new Schema({
  user: String,
  message: String,
  date: Date,
});

//Model: Pasa los datos por el Schema  y lo guarda en la db

const messagesModel = mongoose.model("Messages", messagesSchema);

module.exports = { messagesModel };
