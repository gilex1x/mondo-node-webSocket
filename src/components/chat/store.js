const Model = require('./model');

const addChat = async (chat) => {
    const myChat = await new Model(chat);
    return myChat.save()
}

const listChats = (userId) => {
    let filter = {}
    return new Promise((resolve, reject) => {
        if (userId) {
            filter = {
                users: userId
            }
        }
        Model.find(filter)
            .populate('')
            .exec((err, populatedData) => {
                if (err) {
                    reject(err)
                    return false
                }
                resolve(populatedData)
            })

    })
}



module.exports = { add: addChat, list: listChats }