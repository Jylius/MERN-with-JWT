const express = require("express")
const cors = require("cors")
const userC = require("../controllers/user_C")
const authMiddleware = require("../utils/authMiddleware")

const router = express.Router();

router.use(cors());

router.get("/users",authMiddleware.authToken, userC.getUsers)

module.exports = router