const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    let token = req.headers["authorization"];

    if (!token) {
        return res.status(400).json({ message: "Token missing" });
    }

    token = token.split(" ")[1];

    jwt.verify(token, process.env.SECRET_KEY,(err,decoded) => {
        if (err) {
            return res.status(401).json({ message: "Invalid token" });
        }
        console.log(decoded)
        req.user = decoded; // save user info
        next();             // ✔️ call next only after verification
    });
};

module.exports = verifyToken;
