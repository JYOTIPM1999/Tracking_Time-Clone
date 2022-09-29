import { Box, Flex, Image, Input } from "@chakra-ui/react";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaMicrosoft } from "react-icons/fa";
import { Center, Button, Stack, Text } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../Context /AuthContext";
import { useState } from "react";


export default function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate= useNavigate()
    const {googleSignIn,signIn}= UserAuth()

const handleSubmit=async(e)=>{
        e.preventDefault();
        console.log(e.target.value)
        setError("");
        try {
          await signIn(email, password)
          console.log(password)
          navigate("/account")
        } 
        catch (e) {
          setError(e.message);
          console.log(e.message);
        }
    }

    const handleGoogleSignIn=async()=>{
        try {
          await googleSignIn()
          navigate("/account")
        } 
        catch (e) {
          setError(e.message);
          console.log(e.message);
        }
    }


  return (
    <Box width="100%" height="100%" border="1px solid black">
    <Flex >
      <Box bgColor={"rgb(53,83,139)"} width="55%">
        <Image
          src="./logoblue.png"
          alt="Logo"
        />
      </Box>
      
      <Box  width="45%"margin="auto"border="2px solid red">
        <Flex rowGap="1rem" direction="column" alignItems={"center"}justifyContent="center">
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
          <Box>
            {" "}
            <Input
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              type="email"
            />
          </Box>
          <Box>
            {" "}
            <Input
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
              type="password"
            />
          </Box>
          <Box>
          <Text align={"right"} color="rgb(254,255,254">Forgot Password <u>Retrieve</u> </Text>
          </Box>
          <Box>
          <Button width="300px" bg={"#12121F"}><Text color={"white"}>SignIn</Text></Button>
          </Box>
        </form>
        </Box>
     <Text>Don't have an account?  <Link to="/signup"><u>SignUp</u></Link></Text>
      
        </Flex>


      </Box>

     </Flex>
  
   
    </Box>
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