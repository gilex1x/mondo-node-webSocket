
const Model = require("./model");


const addMessage = (message) => {
  //messageList.push(message);
  const parsedMessage = new Model(message);
  console.log(parsedMessage);
  parsedMessage.save();
};

const getMessages = async (filterUser) => {
  let filter = {};
  if (filterUser != null) {
    filter = { user: filterUser };
    const allMessages = await Model.find(filter); //No params to get all messages
    return allMessages;
  } else {
    const allMessages = await Model.find(); //No params to get all messages
    return allMessages;
  }
};

const updateMessage = async (messageid, newTextMessage) => {
  const foundMessage = await Model.findById(messageid);
  foundMessage.message = newTextMessage;
  const newMessage = await foundMessage.save();
  return newMessage;
};

const deleteMessage = async (messageid) => {
  return Model.deleteOne({ _id: messageid });
};

module.exports = {
  add: addMessage,
  list: getMessages,
  update: updateMessage,
  delete: deleteMessage,
};
