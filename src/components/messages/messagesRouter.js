const express = require("express");
const router = express.Router();
const { createMessage, getMessages } = require("./controller");
const { success, error } = require("./messagesResponses");

router.get("/", (req, res) => {
  res.header({
    "custom-header": "Valor personalizado",
  });
  getMessages()
    .then((messageList) => {
      success(req, res, messageList, 200);
    })
    .catch((err) => {
      error(req, res, "Unexpected error", 500);
    });
});

router.get("/message1", (req, res) => {
  console.log(req.body.message);
  res.status(200).send({
    message: `El mensaje:es ----, ha sido creado con exito`,
  });
});
router.post("/", (req, res) => {
  const { user, message } = req.body;
  createMessage(user, message)
    .then((fullMessage) => {
      res.status(200).send(fullMessage);
    })
    .catch(() => {
      error(req, res);
    });
});

module.exports = router;
