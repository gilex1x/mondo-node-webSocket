const express = require("express");
const router = express.Router();
const { success, error } = require("../network/responses");
const {
  createMessage,
  getMessages,
  updateMessage,
  deleteMessage,
} = require("./controller");

router.get("/", (req, res) => {
  res.header({
    "custom-header": "Valor personalizado",
  });
  console.log(req.query.userId);
  const {userId} = req.query || null;
  //Filtramos por id de usuario
  getMessages(userId)
    .then((messageList) => {
      success(req, res, messageList, 200);
    })
    .catch((err) => {
      error(req, res, err, 500);
    });
});

router.post("/", (req, res) => {
  const { user, message } = req.body;
  createMessage(user, message)
    .then((fullMessage) => {
      success(req, res, `${fullMessage} Created`, 201);
    })
    .catch((err) => {
      error(req, res,err);
    });
});

router.patch("/:messageid", (req, res) => {
  const id = req.params.messageid;
  const { text } = req.body;
  updateMessage(id, text)
    .then((restponseData) => {
      success(req, res, restponseData, 202);
    })
    .catch((err) => {
      error(req, res, "internal error", 500);
    });
  //res.send(req.params.id);
});

router.delete("/:messageid", (req, res) => {
  const id = req.params.messageid;
  deleteMessage(id)
    .then((responseData) => {
      success(req, res, responseData, 200);
    })
    .catch((err) => {
      error(req, res, err, 500);
    });
});

module.exports = router;
