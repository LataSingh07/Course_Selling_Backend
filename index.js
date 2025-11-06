const express = require("express");
const {userRouter} = require("./routes/user");
const {courseRouter} = require("./routes/course");
const {adminRouter} = require("./routes/admin");
const jsonwebtoken = require('jsonwebtoken');


const app = express();

app.use("/api/v1/user",userRouter);
app.use("/api/v1/admin",adminRouter);
app.use("/api/v1/course",courseRouter);

app.listen(3000, function () {
    console.log("Server is running on port 3000");
});

