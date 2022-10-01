API LIST.........

1. USER ROUTER
-> https://tracking-time-clone.herokuapp.com/user/signup
     name: { type: String, required: true },
     email: { type: String, required: true, unique: true },
     password: { type: String, required: true },
     This api is used to create a new user. You can provide the server with the help of above user schema details.
     Post API
     will provide you a token

-> https://tracking-time-clone.herokuapp.com/user/login
     email: { type: String, required: true, unique: true },
     password: { type: String, required: true },
     This api will help you in login in to the server. You can provide the server with the help of above user schema details.
     POST API
     provide the token 

2.  PROJECT ROUTER
-> https://tracking-time-clone.herokuapp.com/project
    
     title:{
     type:String,
     required:true
     }
     Use this api to get projects from the server. You can provide the server with the help of above user schema details.
     GET API
     provide token 

-> https://tracking-time-clone.herokuapp.com/project
     
     title:{
     type:String,
     required:true
     }
     This api is used create a new project in a user. You can provide them with the help of above user schema details.
     POST API
     provide token 

-> https://tracking-time-clone.herokuapp.com/project/:id
    Deletes the project with specified id provided in params

3.  TASK ROUTER
-> https://tracking-time-clone.herokuapp.com/task/:id
     Use this api to get tasks of project whose id is provided in params. You can provide the server with the help of above user schema details.
     GET API

-> https://tracking-time-clone.herokuapp.com/task/:id
     
  title: { type: String, required: true },
  startAt: { type: String, required: true, },
  endAt: {type: String},
     This api is used create a new task in a project whose id is provided in params. You can provide them with the help of above user schema details.
     POST API
     provide token 

-> https://tracking-time-clone.herokuapp.com/task/:id
    Deletes the task with specified id provided in params
