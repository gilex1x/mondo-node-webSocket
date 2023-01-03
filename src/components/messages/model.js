const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const messagesSchema = new Schema({
  chat:{
    type: Schema.ObjectId,
    ref:'chat'
  },
  user:{
    type: Schema.ObjectId,
    ref: 'user'
  },//User id
  message: String,
  date: Date,
});

//Model: Pasa los datos por el Schema  y lo guarda en la db

const messagesModel = mongoose.model("messagges", messagesSchema);

module.exports = messagesModel;
