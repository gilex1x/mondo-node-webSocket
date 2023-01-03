const express = require("express");
const router = express.Router();
const { success, error } = require("../network/responses");
const {
    addChat,
    getUserChats,
} = require("./controller");

router.post("/", (req, res) => {
    const { users } = req.body
    addChat(users)
        .then(data => success(req, res, data, 201))
        .catch(err => error(req, res, err, 500))
});

router.get("/:userId", (req, res) => {
    const { userId } = req.params
    getUserChats(userId)
        .then(data => success(req, res, data, 200))
        .catch(err => error(req, res, err, 500))
});


router.patch("/:messageid", (req, res) => {

});

router.delete("/:messageid", (req, res) => {

});

module.exports = router;