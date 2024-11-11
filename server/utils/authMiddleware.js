const jwt = require("jsonwebtoken")
const secretKey = require("../configuration/jwtConf")
function authToken(req, res, next) {
    const authHeader = req.header("Authorization");
    if (!authHeader) {
        console.log("Authorization header yok");
        return res.status(401).json({ message: "yetkisiz : token uyuşmazlığıı" });
    }
    const [bearer, token] = authHeader.split(" ");
    if (bearer !== "Bearer" || !token) {
        console.log("Yanlış token formatı");
        return res.status(401).json({ message: "yetkisiz : yanlış token format" });
    }

    jwt.verify(token, secretKey, (err, user) => {
        if (err) {
            console.log("Geçersiz token");
            return res.status(403).json({ message: "Forbidden: Invalid token" });
        }
        req.user = user;
        next();
    });
}


module.exports = {
    authToken
}