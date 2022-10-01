import {  Box,  Flex, Image, Input } from "@chakra-ui/react";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaMicrosoft } from "react-icons/fa";
import { Center, Button, Stack, Text } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../RequiredAuth/firebase";
import { UserAuth } from "../RequiredAuth/Context /AuthContext";


export default function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
 

    const navigate= useNavigate()
    const {googleSignIn,signIn}= UserAuth()

const handleSubmit=async(e)=>{
        e.preventDefault();
        if (!email || !password) {
          toast.warn("Fields cant be empty !",{
            position: "top-right",
            theme: "colored",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
          })
          return;
        }
        else if (password.length < 6) {
          toast.warn("Password should be of atleast 6 letters",{   position: "top-right",
          autoClose: 1000,
          theme: "colored",
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,})
        
        }
      
        try {
          await signIn(email, password)
          toast.success('Login Sucessful', {
            position: "top-right",
            autoClose: 1000,
            theme: "colored",
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
          navigate("/account")
        } 
        catch (e) {
          toast.error('Wrong Credentials', {
            position: "top-right",
            autoClose: 1000,
            theme: 'colored',
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
        }
    }

    const handleGoogleSignIn=async()=>{
        try {
          await googleSignIn()
          toast.success('Signin sucessful', {
            position: "top-right",
            autoClose: 1000,
            theme: "colored",
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
          navigate("/account")
        } 
        catch (e) {
          toast.error('Wrong Credentials', {
            position: "top-right",
            autoClose: 1000,
            theme: 'colored',
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
          console.log(e.message);
        }
    }

    const handleForgot = (email) => {
      console.log(email)
      sendPasswordResetEmail(auth, email)
        .then(() => {
          toast.success('Link sent to Email', {
            position: "top-right",
            autoClose: 1000,
            theme: "colored",
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
        })
        .catch((e) => {
          toast.error('Wrong Credentials', {
            position: "top-right",
            autoClose: 1000,
            theme: 'colored',
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
          console.log(e.message);
        });
    };

  return (
    <>
    <Box width="100%" height="100%">
    <Flex >
      <Box bgColor={"rgb(53,83,139)"} width="55%">
        <Image
          src="./logoblue.png"
          alt="Logo"
        />
      </Box>
      
      <Box w={["300", "420px", "390px", "476px"]} margin="auto">
        <Flex   p={["4", "7", "10", "10"]}
          gap={"4"} direction="column" alignItems={"center"}justifyContent="center">
        <Box height="30%" width="30%">
        <Image  src="./logoname.png"/> </Box>
        <Box>
        <Button onClick={handleGoogleSignIn} bg="#E5E4E9" w={"xs"} variant={"outline"}  leftIcon={<FcGoogle />}>
            <Center>
              <Text >Sign in with Google</Text>
            </Center>
          </Button> 
          </Box>
          <Box>
          <Button bg="#E5E4E9" w={"xs"} colorScheme="gray" leftIcon={<FaApple />}>
            <Center>
              <Text>Sign in with Apple</Text>
            </Center>
          </Button>
          </Box>
          <Box>
          <Button bg="#E5E4E9" w={"xs"} colorScheme={"gray"} leftIcon={<FaMicrosoft />}>
            <Center>
              <Text>Sign in with Microsoft</Text>
            </Center>
          </Button>
</Box>
          <Text>Sign in with your Email</Text>


          <Box alignItems={"center"} justifyContent="center">
          <form onSubmit={handleSubmit}>
          <Box pb={3}>
            <Input
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              type="email"
            />
          </Box>
          <Box pb={3}>
            <Input
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              type="password"
            />
          </Box>
          <Box >
            <Button onClick={() => handleForgot(email)} variant="ghost"> <Text pb={3}  align={"right"} color="rgb(254,255,254">Forgot Password <u>Retrieve</u> </Text></Button>
         
          </Box>
          <Box>
          <Button  type="submit" width="300px" bg={"#12121F"}><Text color={"white"}>SIGNIN</Text></Button>
          </Box>
        </form>
        </Box>
     <Text>Don't have an account?  <Link to="/signup"><u>SIGN UP</u></Link></Text>
      
        </Flex>


      </Box>

     </Flex>
  
   
    </Box>
    <ToastContainer theme="colored" />
     </>
  );

}


// <Box>
// <Stack spacing={2} align={"center"} maxW={"md"} w={"full"}>
//   <Button onClick={handleGoogleSignIn} w={"full"} variant={"outline"} leftIcon={<FcGoogle />}>
//     <Center>
//       <Text>Sign in with Google</Text>
//     </Center>
//   </Button>
// <Box>
//   <form onSubmit={handleSubmit}>
//     <input onChange={(e)=>setEmail(e.target.value)} placeholder="Email Address" type="email" />

//     <input onChange={(e)=>setPassword(e.target.value)} placeholder="password" type="password" />
//     <button>SignIn</button>
//   </form>
// </Box>
// <Box>
//     <Text>Don'thave an account?<Link to="/signup">SignUp instead</Link> </Text>
// </Box>