const {Router} = require("express");
const adminRouter = Router();
const {AdminModel} = require("../db");
const {CourseModel} = require("../db");
const bcrypt = require("bcrypt");
const jsonwebtoken = require("jsonwebtoken");
const  { JWT_ADMIN_PASSWORD } = require("../config");
const { adminAuthMiddleware } = require("../middleware/admin");

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
adminRouter.post("/courses", adminAuthMiddleware, async function (req, res) {
    const adminId = req.userId;

    const { title, description, imageUrl, price } = req.body;

    const course = await CourseModel.create({
        title: title, 
        description: description, 
        imageUrl: imageUrl, 
        price: price, 
        creatorId: adminId
    })

    res.json({
        message: "Course created",
        courseId: course._id
    })
})
adminRouter.put("/courses/:courseId",adminAuthMiddleware, async function (req, res) {
    const adminId = req.userId;
    const {title, description, price, imageURL, courseId} = req.body;

    const course = await CourseModel.updateOne(
        { _id: courseId,
         creatorId: adminId 
        },
        { title, description, price, imageURL },
        { new: true }
    );
    res.json({
        message: "admin updates course endpoint",
        courseId: course._id
    })
})
adminRouter.get("/courses",adminAuthMiddleware, async function (req, res) {
    const adminId = req.user.id;
    const courses = await CourseModel.find({ creatorId: adminId });
    res.json({
        message: "admin get courses endpoint",
        courses
    })
})

module.exports = {
    adminRouter: adminRouter
}