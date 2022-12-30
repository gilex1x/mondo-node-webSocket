const store = require("./store");

const getUsers = (userName) => {
  return new Promise((resolve, reject) => {
    store.list(userName)
      .then(res => resolve(res))
      .catch(err => reject(err))
  });
};

const createUser = (userName) => {
  return new Promise((resolve, reject) => {
    if (!userName) {
      console.error("No user provide");
      reject("Datos incompletos");
      return false;
    }

    const fullUser = {
      userName,
    };

    store.add(fullUser)
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};

module.exports = { createUser, getUsers };
