function createCourseRoutes(app){
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
}
module.exports = {
    createCourseRoutes : createCourseRoutes
}