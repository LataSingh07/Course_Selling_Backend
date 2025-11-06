const express = require("express");
const {userRouter} = require("./routes/user");
const {courseRouter} = require("./routes/course");
const jsonwebtoken = require('jsonwebtoken');
const mongoose = require('mongoose');
const secret_key = "lata12345";
const app = express();

app.use("/api/v1/user",userRouter);
app.use("/api/v1/admin",adminRouter);
app.use("/api/v1/course",courseRouter);

app.listen(3000, function () {
    console.log("Server is running on port 3000");
});

