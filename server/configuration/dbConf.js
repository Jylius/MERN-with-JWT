const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB bağlantısı başarılı.");
  } catch (error) {
    console.error("MongoDB bağlantı hatası:", error);
    process.exit(1);
  }
};

mongoose.connection.on("connected", () => {
  console.log("MongoDB'ye bağlanıldı.");
});

mongoose.connection.on("error", (error) => {
  console.error(`DB bağlantısı hatası: ${error}`);
});

module.exports = connectDB;
