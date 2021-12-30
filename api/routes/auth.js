const express = require("express");
const router = express.Router();
const passport = require("passport");

const { User } = require("../models");

router.post("/register", (req, res) => {
  User.create(req.body).then((user) => res.status(201).send(user));
});

router.post("/login", passport.authenticate("local"), (req, res) => {
  res.send(req.user);
});

router.post("/logout", (req, res) => {
  req.logOut();
  res.status(200).send([]);
});

// router.get("/me", logueado, (req, res) => {
//   console.log("ACAAA REQQQ", req.user);
//   if (req.user) res.send(req.user);
//   else res.sendStatus(401);
// });

module.exports = router;

function logueado(req, res, next) {
  if (req.isAuthenticated()) next();
  else res.sendStatus(401);
}
