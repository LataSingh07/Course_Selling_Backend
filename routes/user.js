const { Router } = require("express");
const bcrypt = require("bcrypt");
const { UserModel } = require("../db");
const jsonwebtoken = require("jsonwebtoken");
const  { JWT_USER_PASSWORD } = require("../config");
const { userAuthMiddleware } = require("../middleware/user");


const userRouter = Router();
userRouter.post("/signup", async function (req, res) {
    const { email, password,firstname, lastname } = req.body;
    if(!email || !password || !firstname || !lastname){
        res.status(400).json({
            message: "All fields are required"
        })
        return;
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    await UserModel.create({
        email,
        password:hashedPassword,
        firstname,
        lastname
    });
    res.json({
        message: "successfully signup"
    })
})
userRouter.post("/login", async function (req, res) {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if(user && await bcrypt.compare(password, user.password)){
        const token = jsonwebtoken.sign({
             id: user._id
             }, JWT_USER_PASSWORD);
        res.json({
            message: "successfully login",
            token: token
        })
        return;
    }else{
        res.status(401).json({
            message: "Invalid credentials"
        })
        return;
    }
})
userRouter.get("/purchases", async function (req, res) {
    const userId = req.userId;
    const purchases = await PurchaseModel.find({
         userId: userId 
        });
    res.json({
        message: "user purchases endpoint",
        userId: userId,
        purchases: purchases
    })
})
userRouter.get("/profile", userAuthMiddleware, async function (req, res) {
    const userId = req.userId;
    const user = await UserModel.findById(userId);
    res.json({
        message: "user profile endpoint",
        user: user
    })
})

module.exports = {
    userRouter: userRouter
}