const express = require("express");
const message = require("../messages/messagesRouter");
const router = (server) => {
  server.use("/message", message);
  // server.use("/users", message);
};

module.exports = { router };
