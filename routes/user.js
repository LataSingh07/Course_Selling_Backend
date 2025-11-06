const { Router } = require('express');

const userRouter = Router();
userRouter.post("/user/signup", function (req, res) {
    res.json({
        message: "successfully signup"
    })
})
userRouter.post("/user/login", function (req, req) {
    res.json({
        message: "successfully login"
    })
})
userRouter.get("/user/purchases", function (req, res) {
    res.json({
        message: "userpurchases endpooint"
    })
})

module.exports = {
    userRouter: userRouter
}