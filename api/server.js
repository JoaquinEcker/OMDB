// server configs
const express = require("express");
const app = express();
const db = require("./db");
const cors = require("cors");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const sessions = require("express-session");
const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const routes = require("./routes");
const { User } = require("./models");
require("dotenv").config();

app.use(morgan("tiny"));
app.use(express.json());
app.use(cors());

app.use(cookieParser());
app.use(sessions({ secret: "omdb", resave: true, saveUninitialized: true }));

app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new localStrategy(
    { usernameField: "email", passwordField: "password" },
    function (email, password, done) {
      User.findOne({ where: { email: email } })
        .then((user) => {
          if (!user) {
            return done(null, false);
          }
          user.hash(password, user.salt).then((hash) => {
            if (hash !== user.password) {
              return done(null, false);
            }
            return done(null, user);
          });
        })
        .catch((error) => {
          done(error);
        });
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findByPk(id)
    .then((user) => {
      done(null, user);
    })
    .catch(done);
});

app.use("/api", routes);

app.get("/", function (req, res) {
  res.send("Saludos desde express");
});

app.use((err, req, res, next) => {
  console.log("ERROR");
  console.log(err);
  res.status(500).send(err.message);
});

// const PORT = process.env.PORT || 3001;

db.sync({ force: false })
  .then(() => {
    app.listen(process.env.REACT_APP_PORT, () =>
      console.log(`server listenning on port ${process.env.REACT_APP_PORT}`)
    );
  })
  .catch(console.error);
