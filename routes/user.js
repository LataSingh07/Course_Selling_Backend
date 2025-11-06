const { Router } = require("express");

const userRouter = Router();
userRouter.post("/signup", function (req, res) {
    res.json({
        message: "successfully signup"
    })
})
userRouter.post("/login", function (req, req) {
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