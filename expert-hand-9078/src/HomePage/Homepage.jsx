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
import Footer from "./Footer";
import MoreFeatures from "./MoreFeatures";
import ButtonIntegrations from "./ButtonIntegration";

export default function Homepage() {
  return (
    <Box >
      <Link to="/signin">LOGIN</Link>

      <Container bgColor={"#F4F9F9"} maxW={"6xl"}>
        <Stack
          // border="2px solid red"
          textAlign={"center"}
          align={"center"}
          spacing={{ base: 4, md: 6 }}
          py={{ base: 20, md: 28 }}
        >
          <Text
            as="b"
            color="rgb(237, 86, 90)"
            fontSize={"12px"}
            letterSpacing="1.68px"
          >
            TRACKINGTIME TIME TRACKER SOFTWARE
          </Text>
          <Text as="b" color="#252854" fontSize={"18px"} letterSpacing="1.68px">
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
      <Footer/>
    </Box>
  );
}
