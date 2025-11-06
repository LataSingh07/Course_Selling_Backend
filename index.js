const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
console.log("Environment Variables:", process.env.MONGO_URL, process.env.JWT_ADMIN_PASSWORD, process.env.JWT_USER_PASSWORD);

const {userRouter} = require("./routes/user");
const {courseRouter} = require("./routes/course");
const {adminRouter} = require("./routes/admin");


const app = express();
app.use(express.json());
app.use("/api/v1/user",userRouter);
app.use("/api/v1/admin",adminRouter);
app.use("/api/v1/course",courseRouter);

async function main() {
    await mongoose.connect(process.env.MONGO_URL);
    app.listen(3000, function () {
    console.log("Server is running on port 3000");
});
}
main();
