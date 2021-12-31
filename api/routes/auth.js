const express = require("express");
const router = express.Router();
const passport = require("passport");

const { User } = require("../models");

router.get("/me", (req, res) => {
  req.user ? res.send(req.user) : res.sendStatus(401);
});

router.post("/register", (req, res) => {
  User.create(req.body).then((user) => res.status(201).send(user));
});

router.post("/login", passport.authenticate("local"), (req, res) => {
  res.send(req.user);
});

router.get("/logout", (req, res) => {
  req.logout();
  res.send(req.user);
});

module.exports = router;
