const express = require("express");
const router = express.Router();
const { success, error } = require("./messagesResponses");

router.get("/", (req, res) => {
  res.header({
    "custom-header": "Valor personalizado",
  });
  success(req, res, "Main route", 200);
});

router.post("/message", (req, res) => {
  console.log(req.body.message);
  res.status(200).send({
    message: `El mensaje: ${req.body.message}, ha sido creado con exito`,
  });
});

module.exports = router;
