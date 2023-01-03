//functions and logic messgaes
const { socket } = require("../../socket");
const store = require("./store");


const createMessage = (user, message, chatId) => {
  return new Promise((resolve, reject) => {
    if (!user || !message || !chatId) {
      console.error("falta user o message");
      reject("Datos incorrectos");
      return false;
    }
    const fullMessage = {
      chat: chatId,
      user: user,
      message: message,
      date: new Date(),
    };

    store.add(fullMessage)
      .then(res => {
        socket.io.emit('message', fullMessage)
        resolve(fullMessage)
      })
      .catch(err => reject(err));
  });
};

const getMessages = (filterUser) => {
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
