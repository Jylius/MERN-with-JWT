const User = require("../models/User_M")

async function getUsers() {
    const users = await User.find({})
    return users;
}

module.exports = {
    getUsers
}