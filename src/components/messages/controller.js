//functions and logic messgaes
const store = require("./store");
const createMessage = (user, message) => {
  return new Promise((resolve, reject) => {
    if (!user || !message) {
      console.error("falta user o message");
      reject("Datos incorrectos");
      return false;
    }
    const fullMessage = {
      user: user,
      message: message,
      date: new Date(),
    };
    console.log(fullMessage);
    store.add(fullMessage);
    resolve(fullMessage);
  });
};
const getMessages = () => {
  return new Promise((resolve, reject) => {
    resolve(store.list());
  });
};

module.exports = { createMessage, getMessages };
