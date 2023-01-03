const  store = require('./store')

const addChat = async (users) => {
    console.log(typeof users)
    if (!users || !Array.isArray(users)) {
        return Promise.reject('Invalid datata')
    }
    const chat = {
        users: users
    }
    return await store.add(chat)
}

const getUserChats = async (userId) => {
    return store.list(userId)
}

module.exports = { addChat, getUserChats }