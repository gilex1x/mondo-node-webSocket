const store = require("./store");

const getUsers = (userName) => {
  return new Promise((resolve, reject) => {
    resolve(store.list(userName));
  });
};

const createUser = (userName) => {
  return new Promise((resolve, reject) => {
    console.log(userName);
    if (!userName) {
      console.error("No user provide");
      reject("Datos incompletos");
      return false;
    }
    const fullUser = {
      userName,
    };
    store.add(fullUser);
    resolve(fullUser);
  });
};

module.exports = { createUser, getUsers };
