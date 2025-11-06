const {Router} = require("express");
const adminRouter = Router();
const {AdminModel} = require("../db");
const bcrypt = require("bcrypt");
const jsonwebtoken = require("jsonwebtoken");
const JWT_ADMIN_PASSWORD = "mysecretkeyforadminjwt";

adminRouter.post("/signup", async function (req, res) {
    const { email, firstname, lastname } = req.body;
    const password = await bcrypt.hash(req.body.password, 10);

    await AdminModel.create({
            email: email,
            password: password,
            firstname: firstname,
            lastname: lastname
        });
        res.json({
            message: "successfully signup"
        })
})
adminRouter.post("/login", async function (req, res) {
    const { email, password } = req.body;
    const admin = await AdminModel.findOne({ email });
    if(admin && await bcrypt.compare(password, admin.password)){
        const token = jsonwebtoken.sign({
             id: admin._id
                 }, JWT_ADMIN_PASSWORD);
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
adminRouter.post("/courses", function (req, res) {
    res.json({
        message: "admin purchases endpoint"
    })
})
adminRouter.put("/courses/:courseId", function (req, res) {
    res.json({
        message: "admin updates course endpoint"
    })
})
adminRouter.get("/courses", function (req, res) {
    res.json({
        message: "admin get courses endpoint"
    })
})

module.exports = {
    adminRouter: adminRouter
}