const express = require("express");
const router = express.Router();

const usersRouter = require("./users");
const favouritesRouter = require("./favorites");
const authRouter = require("./auth");
const { User, Favourite } = require("../models");

router.use("/favorites", favouritesRouter);
router.use("/users", usersRouter);
router.use("/auth", authRouter);

module.exports = router;
