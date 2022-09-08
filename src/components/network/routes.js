const express = require("express");
const message = require("../messages/messagesRouter");
const router = (server) => {
  server.use("/messages", message);
  // server.use("/users", message);
};

module.exports = { router };
