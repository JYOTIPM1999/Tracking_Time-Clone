const express=require("express")
const User = require("../user/user.model")
const Project=require("./project.model")
const app=express.Router()
const authMiddlware= async(req,res,next)=>{
    let token=req.headers.token
    if(!token){
        res.send("plz login first")
    }
    let [id,email, password]= token.split("+");
    let  currUser= await User.findById(id)

    if(currUser.password===password){
        req.userId=id;
        next()
    }
    else {
        res.status(401).send("Cannot perform this operation")
    }
    }
   
    

app.use(authMiddlware)

app.get("/", async(req,res)=>{
    try{
    let projects= await Project.find({userId:req.userId});
    res.send(projects)
    }
    catch(e){
        res.send(e.message)
    }
})

app.post("/",async(req,res)=>{
    let {title}=req.body
    
    try{
        let is= await Project.findOne({title})
        if(is){
            res.status(401).send("Project already exists")
        }
       
        let project = await Project.create({
            ...req.body,
            userId:req.userId,
        })
        res.send({project})
    }
    catch(e){
        res.send(e.message)
    }
})


module.exports=app