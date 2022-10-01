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

export default function Professionaltimesheets() {
  return (
    <Container bgColor={"#F4F9F9"} maxW={'100%'} py={12}>
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
    <Flex>
        
        <Image   height={["120px","180px","250px"]}
          w={["120px","200px","250px"]} pos="relative " top={0} bottom={0} src="https://trackingtime.co/wp-content/themes/trackingtime-v3/img/keywords/lineas.png"></Image>
        <Image 
          height={["120px","180px","250px"]}
          alt={'feature image'}
          src={
            'https://trackingtime.co/wp-content/themes/trackingtime-v5/img/home/bottom-action.svg'
          }
         
        />
      
      </Flex>
      <Box>
        <Heading color="#242954" fontSize={["12px","18px","35px"]}>Get professional timesheets</Heading>
        <Heading color="#242954"fontSize={["12px","18px","35px"]}>done in no time!</Heading>
        <Text color={"#7f8488"} paddingTop="14px" fontSize={["8","10",'16px']}>
        Sign up today and join thousands of people around the world using </Text> 
        <Text  color={"#7f8488"} fontSize={["8","10",'16px']}>TrackingTime to simplify their timesheets </Text>
       
        <Stack
          spacing={4}
          divider={
            <StackDivider
              borderColor={useColorModeValue('gray.100', 'gray.700')}
            />
          }>
        </Stack>
        <Stack direction={"row"}>
            <Input
            placeholder="Your Work Email"
           focusBorderColor='black' 
           bgColor={"white"}
           size={["sm","md","md"]}
           border="1px solid black"
            />
              
            
            <Container>
              <Button bg={"#EC545A"}   size={["sm","md","md"]} _hover={{ bg: "#252854" }} px={[4,6,10]}>
              <Link to="/signup"> <Text fontSize={["8px","10px","12px"]}color="#FEFFFE">Start for Free!</Text></Link>
               
              </Button>
              <Text color="black.900" fontSize={["7px","8px","12px"]}>
                14-day PRO trail included
              </Text>
            </Container>
          </Stack>
          <Flex alignItems={"center"} justifyContent="flex-start">
            <Box pr={2}> <FcGoogle/></Box>
           <Box>   <Link to="/signin">
              <Text fontSize={["7px","12px","18px"]} fontWeight="700"as="u" _hover={{ color: "orange.400" }}>Sign in with Google</Text>
            </Link></Box>
         
          </Flex>
      </Box>
    
    </SimpleGrid>

  </Container>
  )
}
