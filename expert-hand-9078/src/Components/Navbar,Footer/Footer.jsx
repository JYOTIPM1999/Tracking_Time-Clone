import React from 'react'
import {
    Box,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    Flex,
    Tag,
    useColorModeValue,
    Select,
    
  } from '@chakra-ui/react';
  import { AiFillTwitterCircle,AiFillLinkedin,AiFillFacebook} from "react-icons/ai";


export default function Footer() {
  return (
    <>
     <Box bgColor={"#F4F9F9"} >
      <Container as={Stack} maxW={'85%'} margin="auto">
        <SimpleGrid columns={{ base: 1, sm: 2, md: 5 }}>
          <Stack  align={'flex-start'}>
            <Text fontSize={["12px","14px","14px"]} color="#252854" py="5px" as="b" >Industries</Text>
            <Link fontSize={"10px"}as="b" href={'#'}>Time Tracking for Graphic Designers</Link>
            <Link fontSize={"10px"}as="b"  href={'#'}>Time Tracking software for Architects</Link>
            <Link fontSize={"10px"}as="b" href={'#'}>Time Tracking for Remote Workers</Link>
            <Link fontSize={"10px"} as="b" href={'#'}>Time Tracking for Marketing Teams</Link>
            <Link fontSize={"10px"} as="b" href={'#'}>Time Tracking for Freelancers</Link>
          </Stack>
          <Stack px={[0,2,6]} align={'flex-start'}>
            <Text fontSize={["12px","14px","14px"]} color="#252854" py="5px" as="b"  >Product</Text>
            <Link fontSize={"10px"} as="b" href={'#'}>Plans & Pricing</Link>
            <Link fontSize={"10px"} as="b" href={'#'}>Intergrations</Link>
            <Link fontSize={"10px"} as="b" href={'#'}>Product Updates</Link>
            <Link fontSize={"10px"} as="b" href={'#'}>Slack Bot</Link>
            <Link fontSize={"10px"} as="b" href={'#'}>Microsoft Teams</Link>
          </Stack>
          <Stack w={"100%"} align={'flex-start'}>
            <Text color="#252854" fontSize={["12px","14px","14px"]} py="5px" as="b" >Features</Text>
            <Link fontSize={"10px"} as="b" href={'#'}>Online Timesheet For Efficient Companies</Link>
            <Link fontSize={"10px"} as="b" href={'#'}>Time Tracker for every business</Link>
            <Link fontSize={"10px"} as="b" href={'#'}>Reports for billing and payroll</Link>
            <Link fontSize={"10px"} as="b" href={'#'}>Attendance tracker for every business</Link>
            <Link fontSize={"10px"} as="b" href={'#'}>Project Management Time Tracking Software</Link>
          </Stack>
          <Stack px={[0,6,10]} align={'flex-start'}>
            <Text fontSize={["12px","14px","14px"]} py="5px" as="b" >Apps</Text>
            <Link fontSize={"10px"} as="b" href={'#'}>Web Apps</Link>
            <Link fontSize={"10px"} as="b" href={'#'}>Time Tracker for Mac</Link>
            <Link fontSize={"10px"} as="b" href={'#'}>Time Tracker for Windows</Link>
            <Link fontSize={"10px"} as="b" href={'#'}>iPhone app</Link>
            <Link fontSize={"10px"} as="b" href={'#'}>Android app</Link>
            <Link fontSize={"10px"} as="b" href={'#'}>Time Tracking for Chrome</Link>
            <Link fontSize={"10px"} as="b" href={'#'}>Time Tracking for Firefox</Link>
            <Link fontSize={"10px"} as="b" href={'#'}>Time Tracking for Safari</Link> 
          </Stack>
          <Stack px={[0,4,6]} align={'flex-start'}>
            <Text fontSize={["12px","14px","14px"]} as="b" py="5px">     Company</Text>
            <Link fontSize={"10px"} as="b" href={'#'}>About Us</Link>
            <Link fontSize={"10px"} as="b" href={'#'}>Blog</Link>
            <Link fontSize={"10px"} as="b" href={'#'}>Media kit</Link>
            <Link fontSize={"10px"} as="b" href={'#'}>Terms of service</Link>
            <Link fontSize={"10px"} as="b" href={'#'}>Privacy Policy</Link>
          </Stack>
        </SimpleGrid>
      </Container>
      <Box w={"80%"} margin="auto"py={10}>
        <Flex
          align={'center'}
          _before={{
            content: '""',
            borderBottom: '1px solid',
            flexGrow: 1,
            mr: 8,
          }}
          _after={{
            content: '""',
            borderBottom: '1px solid',
            flexGrow: 1,
            ml: 8,
          }}>
       
        </Flex>
        <Flex display={"flex"} columnGap={[4,8,16]} >
        <Box w={28} display={"flex"} >
            <AiFillTwitterCircle/>
            <AiFillLinkedin/>
            <AiFillFacebook/>
        </Box>
        <Box>
        <Stack align={'flex-start'}>
            <Text fontSize={["12px","14px","14px"]}as="b" >Help & Support</Text>
            <Link fontSize={"10px"} as="b" href={'#'}>Help  Center</Link>
            <Link fontSize={"10px"} as="b" href={'#'}>Developers</Link>
            <Link fontSize={"10px"} as="b" href={'#'}>Contact Us</Link>
            </Stack>
        </Box>
        <Box>
        <Stack align={'flex-start'}>
            <Text fontSize={["12px","14px","14px"]} as="b" >Choose Language</Text>
            <Select placeholder="" size='sm'>
                <option>English</option>
                <option>Deutsh</option>
                <option>Hindi</option>
            </Select>
            </Stack>
        </Box>
        </Flex>
      </Box>
    </Box>
    </>
  )
}
