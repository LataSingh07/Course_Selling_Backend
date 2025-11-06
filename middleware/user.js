const jwt = require("jsonwebtoken");
const { JWT_USER_PASSWORD } = require("../config");

function userAuthMiddleware(req, res, next) {
    const token = req.headers.token;
    if (!token) {
        return res.status(401).json({ message: "Access denied. No token provided." });
    }
    jwt.verify(token, JWT_USER_PASSWORD, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: "Invalid token." });
        }
        req.user = decoded;
        next();
    });
}

module.exports = {
    userAuthMiddleware
}