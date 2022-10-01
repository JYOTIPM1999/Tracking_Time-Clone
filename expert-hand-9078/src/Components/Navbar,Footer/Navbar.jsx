import {
  Box,
  Flex,
  Button,
  useDisclosure,
  Image,
  Text,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Radio,
  DrawerFooter,
} from "@chakra-ui/react";
import Features from "./FeaturesTab";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

export default function NavbarMain() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        bgColor={"#F4F9F9"}
        px={1}
        // border="2px solid black"
      >
        <Flex
          h={"100px"}
          alignItems={"center"}
          w={{ sm: "94%", md: "85%", lg: "85%" }}
          margin="auto"
          justifyContent={"space-between"}
          // border="1px solid blue"
        >
          <Flex
            alignItems={"center"}
            // border="5px solid red"
            w={{ base: "30%", sm: "30%", md: "20%", lg: "18%" }}
            h={"70px"}
          >
            <Image src="./logoname.png" />
          </Flex>

          <Flex
            // border="3px solid red"
            w="54%"
            h={"100"}
            alignItems="center"
            justifyContent={"space-between"}
            display={{
              base: "none",
              sm: "none",
              md: "none",
              lg: "flex",
              xl: "flex",
            }}
          >
            <Link
              _hover={{color: "#EC545A", textDecoration: "none" }}
            >
              <Text _hover={{color:"#EC545A"}} fontSize={"12px"} as="b" color="#252854">
                INTEGRATIONS
              </Text>
            </Link>

            <Link
              _hover={{color: "#EC545A", textDecoration: "none" }}
            >
              <Text  _hover={{color:"#EC545A"}} fontSize={"12px"} as="b" color="#252854">
                BLOG
              </Text>
            </Link>

            <Features />
          
             <Link to="/signup">   <Button
              bg={"white"}
              color="#EC545A"
              px="2rem"
            
              border="2px solid #EC545A"
              _hover={{ bg: "#EC545A", color: "white" }}
            >
             <Text fontSize={"12px"}>TRY IT FREE</Text>  
            
            </Button></Link>

            <Link to="/signin">
            <Button
              bg={"#EC545A"}
              color="white"
              px="3rem"
              variant="outline"
              _hover={{ bg: "white", color: "#EC545A", border: "2px" }}
            >
           
             <Text fontSize={"12px"}>LOGIN</Text> 
            </Button></Link>
          </Flex>


          <Button
            onClick={onOpen}
            display={{ sm: "block", md: "block", lg: "none", xl: "none" }}
          >
            <HamburgerIcon size="100px" />
          </Button>
  
        </Flex>
        
      </Box>


      <Box>
        <Drawer placement={"top"} onClose={onClose} isOpen={isOpen}>
          <DrawerFooter />
          <DrawerContent w={"100%"} mt={"100px"}>
            <DrawerBody
              w={{ sm: "94%", md: "84%" }}
              ml={{ sm: "3%", md: "8%" }}
            >
               <Link
              _hover={{color: "#EC545A", textDecoration: "none" }}
            >
              <Text _hover={{color:"#EC545A"}} as="b" fontSize={"12px"} color="#252854">
                INTEGRATIONS
              </Text>
            </Link>
             <br/>
              <Link
                _hover={{color: "#EC545A", textDecoration: "none" }}
              >
                <Text _hover={{color:"#EC545A"}} as="b" fontSize={"12px"} color="#252854">
                BLOG
                </Text>
              </Link>
             <br/>
             <Features/>
             <br/>
             <Link to="/signup">
             <Button
              bg={"white"}
              color="#EC545A"
              px="0.5rem"
            size="xs"
              border="1px solid #EC545A"
              _hover={{ bg: "#EC545A", color: "white" }}
            >
            <Text fontSize={"8px"}>TRY IT FREE</Text>  
            </Button>
            </Link>
            <br/>
            <Link to="/signin">
            <Button
              bg={"#EC545A"}
              color="white"
              px="1.1rem"
              size="xs"
              variant="outline"
              _hover={{ bg: "white", color: "#EC545A", border: "1px" }}
            >
             <Text fontSize={"8px"}>LOGIN</Text> 
            </Button>
            </Link>

            
             
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>

      
    </>
  );
}
