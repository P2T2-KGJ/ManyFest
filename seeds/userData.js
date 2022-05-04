const { User } = require("../models");

const userdata = [
{
    username: "freya",
    email: "freya@email.com",
    password: "123password"
}
];

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;