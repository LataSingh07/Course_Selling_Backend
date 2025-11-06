const { Router } = require("express");
const { courseModel } = require("../db");

const courseRouter = Router();
    courseRouter.get("/purchase",function(req,res){
    res.json({
        message : "successfully login"
        })
    })
    courseRouter.get("/preview",function(req,res){
    res.json({
        message : "successfully login"
        })
    })

module.exports = {
    courseRouter : courseRouter
}