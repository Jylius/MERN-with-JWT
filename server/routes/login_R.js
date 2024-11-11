const express = require("express")
const cors = require("cors")
const {login} = require("../controllers/login_C")

const router = express.Router();

router.use(cors())
router.post("/login", login)

module.exports = router;