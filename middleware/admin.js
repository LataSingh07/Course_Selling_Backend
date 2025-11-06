const jwt = require("jsonwebtoken");
const { JWT_ADMIN_PASSWORD } = require("../config");

function adminAuthMiddleware(req, res, next) {
    const token = req.headers.token;
    if (!token) {
        return res.status(401).json({ message: "Access denied. No token provided." });
    }
    jwt.verify(token, JWT_ADMIN_PASSWORD, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: "Invalid token." });
        }
        req.userId = decoded.id;
        next();
    });
}

module.exports = {
    adminAuthMiddleware
}