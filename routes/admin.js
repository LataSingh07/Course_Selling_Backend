const {Router} = require("express");
const adminRouter = Router();
const {adminModel} = require("../db");

adminRouter.post("/signup", function (req, res) {
    res.json({
        message: "successfully signup"
    })
})
adminRouter.post("/login", function (req, res) {
    res.json({
        message: "successfully login"
    })
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