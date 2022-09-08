const express = require("express");
const router = express.Router();
const { createMessage, editMessage } = require("./controller");
const { success, error } = require("./messagesResponses");

router.get("/", (req, res) => {
  res.header({
    "custom-header": "Valor personalizado",
  });
  success(req, res, "Main route", 200);
});

router.get("/message1", (req, res) => {
  console.log(req.body.message);
  res.status(200).send({
    message: `El mensaje:es ----, ha sido creado con exito`,
  });
});
router.post("/message1", (req, res) => {
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
