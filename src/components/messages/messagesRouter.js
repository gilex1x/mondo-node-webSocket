const express = require("express");
const router = express.Router();
const { createMessage, getMessages, updateMessage } = require("./controller");
const { success, error } = require("./messagesResponses");

router.get("/", (req, res) => {
  // res.header({
  //   "custom-header": "Valor personalizado",
  // });
  getMessages()
    .then((messageList) => {
      success(req, res, messageList, 200);
    })
    .catch((err) => {
      error(req, res, "Unexpected error", 500);
    });
});

router.post("/", (req, res) => {
  const { user, message } = req.body;
  createMessage(user, message)
    .then((fullMessage) => {
      success(req, res, `${fullMessage} Created`, 200);
    })
    .catch(() => {
      error(req, res);
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
      error(req, res, 'internal error', 500);
    });
  //res.send(req.params.id);
});

module.exports = router;
