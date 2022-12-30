const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const usersSchema = new Schema({
  userName: String,
});

const usersModel = mongoose.model("user", usersSchema);

module.exports = usersModel;
