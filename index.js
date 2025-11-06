const express = require('express');
const {createUserRoutes} = require("./routes/user");
const {createCourseRoutes} = require("./routes/course");
const jsonwebtoken = require('jsonwebtoken');
const mongoose = require('mongoose');
const secret_key = "lata12345";
const app = express();

app.use("/user",userRouter);
app.use("/course",courseRouter);

app.listen(3000);

