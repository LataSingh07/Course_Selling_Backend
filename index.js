const express = require('express');
const jsonwebtoken = require('jsonwebtoken');
const mongoose = require('mongoose');
const secret_key = "lata12345";
const app = express();

app.post("/user/signup",function(req,res){
    res.json({
        message : "successfully signup"
    })
})
app.post("/user/login",function(req,req){
    res.json({
        message : "successfully login"
    })
})
app.get("/user/purchases",function(req,res){
     res.json({
        message : "userpurchases endpooint"
    })
})
app.get("/course/purchases",function(req,res){
    res.json({
        message : "successfully login"
    })
})
app.get("/courses",function(req,res){
    res.json({
        message : "successfully login"
    })
})

