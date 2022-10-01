import { Box, Image, Input } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Icon,
  IconProps,
} from "@chakra-ui/react";
import Slider from "./Slider";
import Footer from "../../Navbar,Footer/Footer";
import LastCard from "./LastCard";
import Professionaltimesheets from "./professional timesheets";
import OneMoreCard from "./OneMoreCard";
import ButtonIntegrations from "./ButtonIntegration";
import MoreFeatures from "./MoreFeatures";
import NavbarMain from "../../Navbar,Footer/Navbar";


export default function Homepage() {
  return (
    <Box >
      {/* <Link to="/signin">LOGIN</Link> */}
      <NavbarMain/>
      <Container bgColor={"#F4F9F9"} maxW={"100%"}>
        <Stack
          // border="2px solid red"
          textAlign={"center"}
          align={"center"}
          spacing={{ base: 4, md: 4 }}
          py={{ base: 14, md: 19 }}
        >
          <Text
            as="b"
            color="rgb(237, 86, 90)"
            fontSize={"12px"}
            letterSpacing="1.68px"
          >
            TRACKINGTIME TIME TRACKER SOFTWARE
          </Text>
          <Text fontWeight={"800"} color="#252854" fontSize={"18px"} letterSpacing="1.68px">
            SET AND FORGET TIME TRACKING
          </Text>
          <Heading
            fontWeight={600}
            color={"#252854"}
            fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
          >
            Bring Your Productivity
            <Text>to next level.</Text>
          </Heading>

          <Stack direction={"row"}>
            <Input
            variant='outline'
            bgColor={"white"}
            placeholder="Your Work Email"
           focusBorderColor='black' 
  
              // px={16}
              // variant="outline"
              // colorScheme={"#EC545A"}
              // bg={"#FEFFFE"}
            />
              
            
            <Container>
              <Button bg={"#EC545A"} _hover={{ bg: "#252854" }} px={14}>
              <Link to="/signup"> <Text color="#FEFFFE">Start for Free!</Text></Link>
               
              </Button>
              <Text color="#7f8488" fontSize={"12px"}>
                14-day PRO trail included
              </Text>
            </Container>
          </Stack>
          <Flex alignItems={"center"} justifyContent="center" px="12px">
            <Box p={2}> <FcGoogle/></Box>
           <Box>   <Link to="/signin">
              <Text as="u"_hover={{ color: "orange.400" }}>Sign in with Google</Text>
            </Link></Box>
         
          </Flex>

          {/* <Flex w={"full"}> */}
          <Image src="./homepagelogo.png" />
          {/* </Flex> */}
        </Stack>
      </Container>
      <Slider/>
      <MoreFeatures/>
      <ButtonIntegrations/>
      <OneMoreCard/>
      <Professionaltimesheets/>
      <LastCard/>
      <Footer/>
    </Box>
  );
}
