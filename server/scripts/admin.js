const User = require("../models/User_M");
const bcrypt = require("bcrypt");

async function createAdminAccount() {
    try {
        const existingAdmin = await User.findOne({ email: "test@test.com" });
        if (!existingAdmin) {
            const hashedPassword = await bcrypt.hash("test", 10);
            const newAdmin = new User({
                email: "test@test.com",
                name: "Test_Admini",
                password: hashedPassword, 
                role: "admin"
            });
            await newAdmin.save();
            console.log("Admin hesabı eklendi kankam.");
        } else {
            console.log("Yetkili kullanıcı zaten eklenmiş durumda..");
        }
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = { createAdminAccount };
