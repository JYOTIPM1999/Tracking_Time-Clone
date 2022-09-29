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
     <Box>
      <Container as={Stack} maxW={'6xl'}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 5 }} spacing={3}>
          <Stack align={'flex-start'}>
            <Text fontSize={"12px"} as="b" >Industries</Text>
            <Link fontSize={"12px"} as="b" href={'#'}>Time Tracking for Graphic Designers</Link>
            <Link fontSize={"12px"} as="b" href={'#'}>Time Tracking software for Architects</Link>
            <Link fontSize={"12px"} as="b" href={'#'}>Time Tracking for Remote Workers</Link>
            <Link fontSize={"12px"} as="b" href={'#'}>Time Tracking for Marketing Teams</Link>
            <Link fontSize={"12px"} as="b" href={'#'}>Time Tracking for Freelancers</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <Text fontSize={"12px"} as="b" >Product</Text>
            <Link fontSize={"12px"} as="b" href={'#'}>Plans & Pricing</Link>
            <Link fontSize={"12px"} as="b" href={'#'}>Intergrations</Link>
            <Link fontSize={"12px"} as="b" href={'#'}>Product Updates</Link>
            <Link fontSize={"12px"} as="b" href={'#'}>Slack Bot</Link>
            <Link fontSize={"12px"} as="b" href={'#'}>Microsoft Teams</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <Text color="#252854" fontSize={"12px"} as="b" >Features</Text>
            <Link fontSize={"12px"} as="b" href={'#'}>Online Timesheet For Efficient Companies</Link>
            <Link fontSize={"12px"} as="b" href={'#'}>Time Tracker for every business</Link>
            <Link fontSize={"12px"} as="b" href={'#'}>Reports for billing and payroll to reduce administrative work</Link>
            <Link fontSize={"12px"} as="b" href={'#'}>Attendance tracker for every business</Link>
            <Link fontSize={"12px"} as="b" href={'#'}>Project Management Time Tracking Software</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <Text fontSize={"12px"} as="b" >Apps</Text>
            <Link fontSize={"12px"} as="b" href={'#'}>Web Apps</Link>
            <Link fontSize={"12px"} as="b" href={'#'}>Time Tracker for Mac</Link>
            <Link fontSize={"12px"} as="b" href={'#'}>Time Tracker for Windows</Link>
            <Link fontSize={"12px"} as="b" href={'#'}>iPhone app</Link>
            <Link fontSize={"12px"} as="b" href={'#'}>Android app</Link>
            <Link fontSize={"12px"} as="b" href={'#'}>Time Tracking for Chrome</Link>
            <Link fontSize={"12px"} as="b" href={'#'}>Time Tracking for Firefox</Link>
            <Link fontSize={"12px"} as="b" href={'#'}>Time Tracking for Safari</Link> 
          </Stack>
          <Stack align={'flex-start'}>
            <Text fontSize={"12px"} as="b" >     Company</Text>
            <Link fontSize={"12px"} as="b" href={'#'}>About Us</Link>
            <Link fontSize={"12px"} as="b" href={'#'}>Blog</Link>
            <Link fontSize={"12px"} as="b" href={'#'}>Media kit</Link>
            <Link fontSize={"12px"} as="b" href={'#'}>Terms of service</Link>
            <Link fontSize={"12px"} as="b" href={'#'}>Privacy Policy</Link>
          </Stack>
        </SimpleGrid>
      </Container>
      <Box py={10}>
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
        <Flex display={"flex"}columnGap={14} >
        <Box display={"flex"} >
            <AiFillTwitterCircle/>
            <AiFillLinkedin/>
            <AiFillFacebook/>
        </Box>
        <Box>
        <Stack align={'flex-start'}>
            <Text fontSize={"12px"} as="b" >Help & Support</Text>
            <Link fontSize={"12px"} as="b" href={'#'}>Help  Center</Link>
            <Link fontSize={"12px"} as="b" href={'#'}>Developers</Link>
            <Link fontSize={"12px"} as="b" href={'#'}>Contact Us</Link>
            </Stack>
        </Box>
        <Box>
        <Stack align={'flex-start'}>
            <Text fontSize={"12px"} as="b" >Choose Language</Text>
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
