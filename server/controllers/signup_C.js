const userService = require("../services/signup_S")

async function createUser(req,res) {
    try {
        const userData = req.body;
        const user = await userService.createuser(userData)
        res.status(201).json({user: user, message: "kullanıcı başarılı bir şekilde eklendi."})
    } catch (error) {
        console.log("burada bir hata var kanki : ",error)
        res.status(400).json({message : error.message})
    }   
}

module.exports = {createUser}