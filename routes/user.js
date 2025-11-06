const { Router } = require("express");
const { userModel } = require("../db");

const userRouter = Router();
userRouter.post("/signup", function (req, res) {
    res.json({
        message: "successfully signup"
    })
})
userRouter.post("/login", function (req, res) {
    res.json({
        message: "successfully login"
    })
})
userRouter.get("/purchases", function (req, res) {
    res.json({
        message: "userpurchases endpooint"
    })
})

module.exports = {
    userRouter: userRouter
}