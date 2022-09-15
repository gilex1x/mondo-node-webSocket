const db = require("mongoose");
const Model = require("./model");

const addUser = (user) => {
  const parsedUser = new Model(user);
  return parsedUser.save();
};

module.exports = {
  add: addUser,
};
