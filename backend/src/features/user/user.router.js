const express=require("express")

const User=require("./user.model")
const app=express.Router();

app.post("/signup",async(req,res)=>{
    let {email,password}=req.body;

    try{
        let isPresent=await User.findOne({email});
        if(isPresent){
            res.status(404).send("User already exists")
        }
        
        let newUser= await User.create(req.body)
        
        res.send({token:`${newUser.id}+${newUser.email}+${newUser.password}`})
    }
    catch(e){
        res.status(500).send(e.message)
    }
})

app.post("/login",async(req,res)=>{
    let {email,password}=req.body;

    try{
        let user=await User.findOne({email,password});
        if(!user){
            res.status(404).send("Authentication failed")
        }
                
        res.send({token:`${user.id}+${user.email}+${user.password}`})
    }
    catch(e){
        res.status(500).send(e.message)
    }
})

module.exports=app;