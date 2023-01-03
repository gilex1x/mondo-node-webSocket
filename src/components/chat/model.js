const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const chatSchema = new Schema({
    users: [{
        type: Schema.ObjectId,
        ref: 'user'
    }]
});

//Model: Pasa los datos por el Schema  y lo guarda en la db

const chatModel = mongoose.model("chat", chatSchema);

module.exports = chatModel;
