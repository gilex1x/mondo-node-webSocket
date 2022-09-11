const db = require("mongoose");

const addMessage = (message) => {
  messageList.push(message);
};

const getMessages = () => {
  return messageList;
};

module.exports = { add: addMessage, list: getMessages };
