// npm paketlerini import ettik
const express = require("express");
require("dotenv").config();
const cors = require("cors");

// kendi oluşturduğumuz modülleri import ediyorum:
const connectDB = require("./configuration/dbConf");
const { createAdminAccount } = require("./scripts/admin");
const signupRoute = require("./routes/signup_R");
const loginRoute = require("./routes/login_R");
const userRoute = require("./routes/user_R")

// modülleri kullandık
const app = express();
app.use(cors());
app.use(express.json()); 

// route kullanımları
app.use("/user", signupRoute);
app.use("/auth", loginRoute);
app.use("/api",userRoute)

// admin hesabını oluşturdum
// (async () => {
//     await createAdminAccount();
// })();
//burası bir süre böyle kalacak

connectDB();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server PORT: ${PORT} üzerinde dinleniyor.`);
});
