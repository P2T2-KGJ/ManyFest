const { User } = require("../models");

const userdata = [
{
    username: "freya",
    email: "freya@email.com",
    password: "123password"
},
{
    username: "Jesse",
    email: "Jesse@email.com",
    password: "password1234"
},
];

const seedUsers = () => User.bulkCreate(userdata, {
    individualHooks: true,
    returning: true,
  });

module.exports = seedUsers;