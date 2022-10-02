const express=require("express")
const PORT= process.env.PORT || 8080;
const projectRouter=require("./src/features/project/project.router")
const userRouter=require("./src/features/user/user.router")
const taskRouter=require("./src/features/task/task.router")
const fs=require("fs")
const cors=require("cors")
const app=express();
app.use(cors())
app.use(express.json())
app.use("/user",userRouter)
app.use("/project",projectRouter)
app.use("/task",taskRouter)
const connect=require("./src/config/db")

app.listen(PORT,async()=>{
    await connect();
    console.log(`server started on http://localhost:${PORT}`)
})