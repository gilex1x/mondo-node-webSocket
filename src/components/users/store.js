
const Model = require("./model");

const getUsers = async (userName) => {
  let filter = {};
  if (userName != null) {
    filter = { userName: userName };
    const allUsers = await Model.find(filter);
    return allUsers;
  } else {
    const allUsers = await Model.find();
    return allUsers;
  }
};

const addUser = async(user) => {
  const parsedUser = await new Model(user);
  return parsedUser.save();
};

module.exports = {
  add: addUser,
  list: getUsers,
};
