//functions and logic messgaes
const store = require("./store");


const createMessage = async (user, message) => {
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

    store.add(fullMessage)
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};

const getMessages = (filterUser) => {
  console.log(filterUser);
  return new Promise((resolve, reject) => {
    store.list(filterUser)
      .then(res => resolve(res))
      .catch(err => reject(err))
  });
};

const updateMessage = (messageid, newTextMessage) => {
  return new Promise(async (resolve, reject) => {
    if (!messageid || !newTextMessage) {
      reject("Incomplete data");
      return false;
    }
    store.update(messageid, newTextMessage)
      .then(res => resolve(res))
      .catch(err => reject(err))
  });
};

const deleteMessage = (messageid) => {
  return new Promise(async (resolve, reject) => {
    if (!messageid) {
      reject("No id provided");
      return false;
    }

    store.delete(messageid)
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};

module.exports = { createMessage, getMessages, updateMessage, deleteMessage };
