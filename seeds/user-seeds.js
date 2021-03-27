const { User } = require('../models');

const userData = [
    {
        username: "pat_miller",
        email: "pat@gmail.com",
        password: "1234abcd"
    },
    {
        username: "bryan_b",
        email: "bryan_b@gmail.com",
        password: "password1"
    },
    {
        username: "cateyes",
        email: "cateyes@gmail.com",
        password: "password2"
    },
    {
        username: "tim_p",
        email: "timp@gmail.com",
        password: "password3"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;