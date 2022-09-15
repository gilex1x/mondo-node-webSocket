const express = require("express");
const router = express.Router();
const { success, error } = require("../network/responses");
const { createUser } = require("./controller");

router.get("/", (req, res) => {});

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

router.patch("/:userid", (req, res) => {});

router.delete("/:userid", (req, res) => {});

module.exports = router;
