// import { Button } from '@chakra-ui/react'
// import React from 'react'
// import {useNavigate } from 'react-router-dom'
// import { UserAuth } from '../RequiredAuth/Context /AuthContext'

// export default function Account() {
//     const {user,logout}= UserAuth()
//     const nav= useNavigate()

//     const handlelogout= async ()=>{
//          try{
//              await logout()
//              nav("/signin")

//          }
//          catch(e){
//               console.log(e.message)
//          }
//     }

//   return (
//     <div>Account
//         <p>User Mail:{user && user.email}</p>
//         <p>Token: {user && user.uid}</p>
//         <Button onClick={handlelogout}>Logout</Button>
//     </div>

//   )
// }
