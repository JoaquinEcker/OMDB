const express = require("express");
const router = express.Router();

const { Favourite, User } = require("../models");

router.post("/", async (req, res) => {
  const { userId } = req.query;
  const { Title, Year, imdbID } = req.body;
  const movie = await Favourite.findOrCreate({
    where: { Title },
    defaults: { Title, imdbID, Year },
  });
  const user = await User.findByPk(userId);
  await user.addFavourite(movie[0]);
  res.status(200).send(user);
});

router.delete("/", (req, res) => {
  const { userId, movieId } = req.query;
  Favourite.findOne({
    where: { id: movieId },
  })
    .then((peli) => {
      User.findByPk(userId).then((user) => user.removeFavourite(peli));
    })
    .then(() => res.sendStatus(200))
    .catch((err) => res.status(500).send(err));
});

router.get("/:id", (req, res) => {
  User.findOne({
    where: { id: req.params.id },
    include: {
      model: Favourite,
    },
  }).then((movies) => res.send(movies));
});
module.exports = router;
