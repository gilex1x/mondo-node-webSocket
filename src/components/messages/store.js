const db = require("mongoose");
const Model = require("./model");
const dotenv = require("dotenv");
dotenv.config();
//console.log(process.env.DB_USER);
const uriDb = `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@ac-eeavtse-shard-00-00.9qu7vbu.mongodb.net:27017,ac-eeavtse-shard-00-01.9qu7vbu.mongodb.net:27017,ac-eeavtse-shard-00-02.9qu7vbu.mongodb.net:27017/?ssl=true&replicaSet=atlas-2ptlot-shard-0&authSource=admin&retryWrites=true&w=majority`;

db.connect(uriDb, { useNewUrlParser: true }, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("[db] conecction success");
  }
});

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

module.exports = { add: addMessage, list: getMessages, update: updateMessage };
