import { Box,  Container,  Flex, Image, Input, InputGroup, InputRightElement, SimpleGrid, VStack } from "@chakra-ui/react";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaMicrosoft } from "react-icons/fa";
import { Center, Button, Stack, Text } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { UserAuth } from "../RequiredAuth/Context /AuthContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function SignUp() {
  const [show, setShow] = useState(false)
  const {googleSignIn,signIn}= UserAuth()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleClick = () => setShow(!show)

  const { createUser } = UserAuth();
 
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(e.target.value)
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
      await createUser(email, password);
      toast.success('Account created, redirecting to Login', {
        position: "top-right",
        autoClose: 1000,
        theme: "colored",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });

        navigate("/signin")
  
    } catch (e) {
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
  };

  const handleGoogleSignIn=async()=>{
    try {
      await googleSignIn()
      toast.success('Success', {
        position: "top-right",
        autoClose: 1000,
        theme: "colored",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });

      navigate("/signin")
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
  return (
    <>
    <Flex direction={"column"} align={"center"} >

    <Box width="100%" height="100%">
    
      <Flex >
        <Box bgColor={"rgb(53,83,139)"} width="55%">
          <Image
            src="./logoblue.png"
            alt="Logo"
          />
        </Box>
        
        <Box  width="45%"margin="auto">
          <Flex rowGap="1rem" direction="column" alignItems={"center"}justifyContent="center">
          <Box height="30%" width="30%">
          <Image  src="./logoname.png"/> </Box>
          <Box>
          <Button   onClick={handleGoogleSignIn} bg="#E5E4E9" w={"xs"} variant={"outline"}  leftIcon={<FcGoogle />}>
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
            <Text>Sign up with your Email</Text>


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
             
              {/* // */}
              <InputGroup size='md'>
      <Input
         onChange={(e) => setPassword(e.target.value)}
        pr='4.5rem'
        type={show ? 'text' : 'password'}
        placeholder='Enter password'
      />
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>
            
            </Box>
            <Box p={2}>
            <Text color="rgb(254,255,254">I agree with the <u>Terms of Service</u> </Text> <Text> &<u>Privacy Policy</u> </Text>
            </Box>
            <Box>
            <Button p={2} type="submit" width="300px" bg={"#12121F"}><Text color={"white"}>SIGNUP</Text></Button>
            </Box>
          </form>
          </Box>
       
          <Link to="/signin"><u>Back to Login</u></Link>
          </Flex>


        </Box>

       </Flex>
    </Box>
    </Flex>
    <ToastContainer theme="colored" />
    </>
  );
}
