const express = require("express");
const router = express.Router();
const { success, error } = require("../network/responses");
const { createUser, getUsers } = require("./controller");

router.get("/", (req, res) => {
  const userName = req.query.userName || null;
  getUsers(userName)
    .then((usersList) => success(req, res, usersList, 200))
    .catch((err) => { console.log(err);error(req, res, err, 500) });
});

router.post("/", (req, res) => {
  const { userName } = req.body;
  createUser(userName)
    .then((fullUser) => {
      success(req, res, `${fullUser} created`, 201);
    })
    .catch((err) => {
      error(req, res, err);
    });
});

router.patch("/:userid", (req, res) =>  error(req,res,'Method Not Allowed',405)
 );

router.delete("/:userid", (req, res) => error(req,res,'Method Not Allowed',405));

module.exports = router;
