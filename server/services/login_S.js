const bcrypt = require("bcrypt");
const User = require("../models/User_M");
const { generateToken } = require("../utils/JwUtils");

async function login(email, password) {
    try {
        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            throw new Error("Bu kullanıcı zaten var kanka bakma");
        }
        
        const isPasswordValid = await bcrypt.compare(password, existingUser.password);
        
        if (!isPasswordValid) {
            throw new Error("Şifreler uyuşmadı abi");
        }
        
        const token = generateToken(existingUser);
        return token;
    } catch (error) {
        throw new Error("Invalid credentials");
    }
}

module.exports = {
    login
};
