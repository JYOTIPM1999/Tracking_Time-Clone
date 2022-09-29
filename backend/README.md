API LIST.........

1. USER ROUTER
-> http://localhost:8080/user/signup
     name: { type: String, required: true },
     email: { type: String, required: true, unique: true },
     password: { type: String, required: true },
     This api is used to create a newuser. You can provide the server with the help of above user schema details.
     Post API
     will provide you a token

-> http://localhost:8080/user/login
     email: { type: String, required: true, unique: true },
     password: { type: String, required: true },
     This api will help you in login in to the server. You can provide the server with the help of above user schema details.
     POST API
     provide the token 

2.  PROJECT ROUTER
-> http://localhost:8080/project
    
     title:{
     type:String,
     required:true
     }
     Use this api to get projects from the server. You can provide the server with the help of above user schema details.
     GET API
     provide token 

-> http://localhost:8080/project
     
     title:{
     type:String,
     required:true
     }
     This api is used create a new project in a user. You can provide them with the help of above user schema details.
     POST API
     provide token 

-> http://localhost:8080/project/:id
    Deletes the project with specified id provided in params

3.  TASK ROUTER
-> http://localhost:8080/task/:id
     Use this api to get tasks of project whose id is provided in params. You can provide the server with the help of above user schema details.
     GET API

-> http://localhost:8080/task/:id
     
  title: { type: String, required: true },
  startAt: { type: String, required: true, },
  endAt: {type: String},
     This api is used create a new task in a project whose id is provided in params. You can provide them with the help of above user schema details.
     POST API
     provide token 

-> http://localhost:8080/task/:id
    Deletes the task with specified id provided in params
