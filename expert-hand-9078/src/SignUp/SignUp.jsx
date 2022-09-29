import { Box, Container, Flex, Image, Input, VStack } from "@chakra-ui/react";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaMicrosoft } from "react-icons/fa";
import { Center, Button, Stack, Text } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { UserAuth } from "../Context /AuthContext";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { createUser } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUser(email, password);
      navigate("/signin");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

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
          <Button bg="#E5E4E9" w={"xs"} variant={"outline"}  leftIcon={<FcGoogle />}>
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
            <Text color="rgb(254,255,254">I agree with the <u>Terms of Service</u> </Text> <Text> &<u>Privacy Policy</u> </Text>
            </Box>
            <Box>
            <Button width="300px" bg={"#12121F"}><Text color={"white"}>SignUp</Text></Button>
            </Box>
          </form>
          </Box>
       
          <Link to="/signin"><u>Back to Login</u></Link>
          </Flex>


        </Box>

       </Flex>


  {/* <Container width="70%" border="2px solid blue" marginTop="10rem" height="50%">
      <VStack margin="auto">
          <Box spacing={4} align={"center"} maxW={"md"} w={"full"}>
            <Image height="30%" width="30%" src="./logoname.png"/>
            <Button w={"full"} variant={"outline"} leftIcon={<FcGoogle />}>
              <Center>
                <Text>Sign in with Google</Text>
              </Center>
            </Button>

            <Button w={"full"} colorScheme="gray" leftIcon={<FaApple />}>
              <Center>
                <Text>Sign in with Apple</Text>
              </Center>
            </Button>

            <Button w={"full"} colorScheme={"gray"} leftIcon={<FaMicrosoft />}>
              <Center>
                <Text>Sign in with Microsoft</Text>
              </Center>
            </Button>
          </Box>
    
          <form onSubmit={handleSubmit}>
            <div>
              {" "}
              <input
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                type="email"
              />
            </div>
            <div>
              {" "}
              <input
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password"
                type="password"
              />
            </div>

            <button>SignUp</button>
          </form>

        
          <Text>
            Already have an account?<Link to="/signin">SignIn instead</Link>
          </Text>
      
        </VStack>
        </Container> */}
       
    </Box>
  );
}
