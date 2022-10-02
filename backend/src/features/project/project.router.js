const express=require("express")
const User = require("../user/user.model")
const Project=require("./project.model")
const Task=require("../task/task.model")
const app=express.Router()
const authMiddlware= async(req,res,next)=>{
    let token=req.headers.token
    if(!token){
        res.send("plz login first")
    }
    let [id,email, password]= token.split("+");
    let  currUser= await User.findById(id)

    if(currUser.email===email){
        req.userId=id;
        next()
    }
    else {
        res.status(401).send("Cannot perform this operation")
    }
    }
   
app.get("/",authMiddlware, async(req,res)=>{
    try{
    let projects= await Project.find({user:req.userId});
    res.send(projects)
    }
    catch(e){
        res.send(e.message)
    }
})

app.post("/",authMiddlware,async(req,res)=>{
    let {title}=req.body
    
    try{
        let is= await Project.findOne({title})
        if(is){
            res.status(401).send("Project already exists")
        }
       
        let project = await Project.create({
            ...req.body,
            user:req.userId,
        })
        res.send({project})
    }
    catch(e){
        res.send(e.message)
    }
})

app.delete("/:id",async(req,res)=>{
    let {id}= req.params;
    await Task.deleteMany({project:id});
    await Project.findByIdAndDelete(id);
    res.send("Data Deleted")
})

module.exports=app