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

const getMessages = (filterUser) => {
  console.log(filterUser);
  return new Promise((resolve, reject) => {
    resolve(store.list(filterUser));
  });
};

const updateMessage = (messageid, newTextMessage) => {
  return new Promise(async (resolve, reject) => {
    if (!messageid || !newTextMessage) {
      reject("Incomplete data");
      return false;
    }
    const result = await store.update(messageid, newTextMessage);
    resolve(result);
  });
};

const deleteMessage = (messageid) => {
  return new Promise(async (resolve, reject) => {
    if (!messageid) {
      reject("No id provided");
      return false;
    }
    store
      .delete(messageid)
      .then(() => resolve())
      .catch((err) => console.error(err));
  });
};

module.exports = { createMessage, getMessages, updateMessage, deleteMessage };
