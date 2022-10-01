import React from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
function ButtonIntegrations() {
  return (
    <Box py={["4", "10", "16", "28"]} bg={"#F3F3F3"}>
      <SimpleGrid margin={"auto"} w={"80%"} spacing={[0,2,4]} columns={[2,3,6]}>
        <Box width={"200%"}>
          <Text fontWeight={"medium"} color={"#25CF60"}></Text>
          <Flex direction={"column"}>
            <Heading textAlign={"left"} size={["sm", "md", "lg"]}>
              Add time tracking to
            </Heading>
            <Heading textAlign={"left"} size={["sm", "md", "lg"]}>
              your favorite business
            </Heading>
            <Heading textAlign={"left"} size={["sm", "md", "lg"]}>
              apps
            </Heading>

            <Text
              py={[1, 2, 3]}
              textAlign={"left"}
              fontSize={["8px", "12px", "18px"]}
              color="#7f8488"
            >
              No matter where your employees work, TrackingTime works with them.
              Install the TrackingTime Button for Chrome and Firefox and track
              time right within the productivity apps your employees use
              everyday.
            </Text>
          </Flex>

          <Button
            h={["1rem", "2rem"]}
            bg={"white"}
            colorScheme="black"
            w={["10%", "20%", "30%"]}
            // px={["1rem","2rem","3rem"]}
            variant="outline"
            border="2px solid"
            _hover={{ bg: "#252854", color: "white" }}
          >
            <Text fontSize={["8px", "12px"]}>SEE ALL</Text>
          </Button>
        </Box>
        
        <Box width={"100%"}>{/* //fake box */}</Box>

        <Box width={"100%"}>
          <Image h={"40%"} w={"60%"} margin={"auto"}  py={["0rem","0.5rem","1rem"]} src="./asana.png"></Image>
          <Text

            color="#242954"
            as="b"
            py={["0rem","0.5rem","1rem"]}
            fontSize={["12px","18px","24px"]}
            textAlign={"center"}
           
          >
            Asana
          </Text>
          <Text
         py={["0rem","0.5rem","1rem"]}
            fontSize={["8px","10px","14px"]}
            color="#7f8488"
            fontWeight="500"
            px={["0rem","0.5rem","1rem"]}
            textAlign={"left"}
          >
            Asana puts tasks and conversations together to enable teamwork
            without email.
          </Text>
        </Box>
        <Box  width={"100%"}>

        <Image h={"40%"} w={"60%"} margin={"auto"} py={["0rem","0.5rem","1rem"]} src="./trello.png"></Image>
          <Text

            color="#242954"
            as="b"
            py={["0rem","0.5rem","1rem"]}
            fontSize={["12px","18px","24px"]}
            textAlign={"center"}
           
          >
          Trello
          </Text>
          <Text
          px={["0rem","0.5rem","1rem"]}
          py={["0rem","0.5rem","1rem"]}
            fontSize={["8px","10px","14px"]}
            color="#7f8488"
            fontWeight="500"
            textAlign={"left"}
          >
             Trello is a collaboration tool that organizes your projects into boards.
          </Text>
        </Box>
        <Box  width={"100%"}>
    
        <Image h={"40%"} w={"60%"} margin={"auto"}  py={["0rem","0.5rem","1rem"]} src="./todoist.png"></Image>
          <Text

            color="#242954"
            as="b"
            px={["0rem","0.5rem","1rem"]}
            py={["0rem","0.5rem","1rem"]}
            fontSize={["12px","18px","24px"]}
            textAlign={"center"}
           
          >
            Todoist
          </Text>
          <Text
         px={["0rem","0.5rem","1rem"]}
          py={["0rem","0.5rem","1rem"]}
            fontSize={["8px","10px","14px"]}
            color="#7f8488"
            fontWeight="500"
            textAlign={"left"}
          >
            Todoist is a task manager thats useful, fast and easy to use.
          </Text>


        </Box>
        <Box width={"100%"} >
        <Image h={"40%"} w={"60%"} margin={"auto"}  py={["0rem","0.5rem","1rem"]}src="./smartsheet.png"></Image>
          <Text

            color="#242954"
            as="b"
            py={["0rem","0.5rem","1rem"]}
            fontSize={["12px","18px","24px"]}
            textAlign={"center"}
           
          >
             Smartsheet
          </Text>
          <Text
          px="1rem"
          py="1rem"
            fontSize={["8px","10px","14px"]}
            color="#7f8488"
            fontWeight="500"
            textAlign={"left"}
          >
            Smartsheet is a web-based project and task management and work collaboration software.
          </Text>
        </Box>
      </SimpleGrid>
    </Box>

  );
}

export default ButtonIntegrations;
