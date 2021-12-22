const Favourite = require("./Favourite");
const User = require("./User");

module.exports = { Favourite, User };

User.belongsToMany(Favourite, { through: "Favourite_User" });
// User.belongsToMany(Favourite, { through: "Favourite_User" });
