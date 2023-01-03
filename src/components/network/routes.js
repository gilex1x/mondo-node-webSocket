
const db = require("mongoose");
const messageRouter = require("../messages/router");
const usersRouter = require("../users/router");
const chatRouter = require('../chat/router')
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
const router = (server) => {
  server.use("/messages", messageRouter);
  server.use("/users", usersRouter);
  server.use("/chat", chatRouter)
};

module.exports = { router };
