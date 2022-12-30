
const Model = require("./model");


const addMessage = async (message) => {
  //messageList.push(message);
  const parsedMessage = await new Model(message);
  parsedMessage.save();
};

const getMessages = async (filterUser) => {
  let filter = {};
  return new Promise((resolve, reject) => {
    if (filterUser != null) {
      filter = { user: filterUser };
      Model.find(filter)
        .populate('user')
        .exec((err, populatedData) => {
          if (err) {
            console.log(err)
            reject(err)
            return false
          }
          resolve(populatedData)
        }) //No params to get all messages

    } else {
      Model.find() //No params to get all messages
        .populate('user')
        .exec((err, populatedData) => {
          if (err) {
            console.log(err)
            reject(err)
            return false
          }
          resolve(populatedData)
        })

    }

  })
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
