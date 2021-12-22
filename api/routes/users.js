const express = require("express");
const router = express.Router();

const { User, Favourite } = require("../models");

router.get("/", (req, res) => {
  User.findAll().then((users) => res.send(users));
});

router.get("/:id", (req, res) => {
  User.findOne({
    where: {
      id: req.params.id,
    },
  }).then((user) => res.send(user));
});

router.delete("/:id", (req, res) => {
  User.destroy({ where: { id: req.params.id } }).then(() =>
    res.sendStatus(202)
  );
});

module.exports = router;
