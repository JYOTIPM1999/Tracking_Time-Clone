import React from 'react'

import { FcGoogle } from "react-icons/fc";
import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    useColorModeValue,
    Box,
    Input,
    Button,
  } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function LastCard() {
  return (
    <Box bgColor={"#F4F9F9"} py={[1,1,4]} px={[4,6,14]}>
        <Box  w={"40%"}>
            <Image boxSize={["38px","75px","100px"]} src="https://trackingtime.co/wp-content/themes/trackingtime-v5/img/layout/footer/tt.svg"></Image>
        <Heading  py={[3,3,4]} color="#242954" textAlign={"left"} fontSize={["12px","18px","35px"]}>Get Started</Heading>
        <Text textAlign={"left"} pb={[0.5,1,2]} color={"#7f8488"} as="b"  fontSize={["8","10",'16px']}>
        Sign up today and join thousands of people around the world using </Text> 
        <Text  textAlign={"left"} color={"#7f8488"} as="b" pb={[1,2,4]} fontSize={["8","10",'16px']}>TrackingTime to simplify their timesheets </Text>
       
        <Stack
         pt={10}
          spacing={4}
          divider={
            <StackDivider
              borderColor={useColorModeValue('gray.100', 'gray.700')}
            />
          }>
        </Stack>
        <Stack direction={"row"}>
            <Input
            bgColor={"white"}
            placeholder="Your Work Email"
           focusBorderColor='black' 
           size={["sm","sm","md"]}
           border="1px solid black"
            />
              
            
            <Container>
              <Button size={["xs","sm","md"]} bg={"#EC545A"} _hover={{ bg: "#252854" }} px={12}>
              <Link to="/signup"> <Text fontSize={["8px","10px","12px"]}color="#FEFFFE">Start for Free!</Text></Link>
               
              </Button>
              <Text color="black.900" fontSize={["7px","8px","12px"]}>
                14-day PRO trail included
              </Text>
            </Container>
          </Stack>
          <Flex pb={[7,10,16]} alignItems={"center"} justifyContent="flex-start">
            <Box pr={2}> <FcGoogle/></Box>
           <Box>   <Link to="/signin">
              <Text fontSize={["7px","12px","18px"]} fontWeight="700"as="u" _hover={{ color: "orange.400" }}>Sign in with Google</Text>
            </Link></Box>
         
          </Flex>
          </Box>
      </Box>
    
  )
}
