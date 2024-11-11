const User = require("../models/User_M")
const bcrypt = require("bcrypt")

async function createuser(userData) {
    const { name, email, password}= userData;
    const hashedPassword = await bcrypt.hash(password,10)
    const createuser = new User({
        name,
        email,
        password : hashedPassword,
        role:"customer"
    });
    const saveUser = await createuser.save();
    return saveUser
}
module.exports = {createuser}
