const express=require("express")
const app=express.Router()
const Task=require("./task.model")
const Project=require("../project/project.model")

app.get("/:id", async(req,res)=>{
    let {id}=req.params;
    console.log(req.query)
    let y=(Object.values(req.query)[0])
    try{
    let tasks= await Task.find({$and:[{project:id},{date:y}]});
    res.send(tasks)
    }
    catch(e){
        res.send(e.message)
    }
})

app.post("/:id",async(req,res)=>{  
    let {id}=req.params
    let y=(Object.values(req.query)[0])

    try{
        let task = await Task.create({
            ...req.body,
            date:y,
            project:id,
        })
        res.send(task)
    }
    catch(e){
        res.send(e.message)
    }
})

app.delete("/:id",async(req,res)=>{
    let {id}= req.params;
    await Task.findByIdAndDelete(id);
    res.send("Data Delele")

})



module.exports=app