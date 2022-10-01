import {
  chakra,
  SimpleGrid,
  Box,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";

export default function OneMoreCard() {
  return (
    <Box
      maxW="100%"
      mx={"auto"}
      pt={5}
      px={{ base: 2, sm: 12, md: 17 }}
      boxShadow={"2xl"}
    >
      <SimpleGrid columns={{ base: 1, md: 4 }}>
        <Box bg="white"  p={6} overflow={"hidden"}>
          <Box h={"210px"} mt={-6} mx={-6} mb={6} pos={"relative"}>
            <Image width="80%"
            margin={"auto"}
            h="100%"
              src={
                "https://trackingtime.co/wp-content/themes/trackingtime-v5/img/keywords/slider-1.svg"
              }
              layout={"fill"}
            />
          </Box>
          <Stack>
            <Heading
              color={useColorModeValue("gray.700", "white")}
              fontSize={"lg"}
              fontFamily={"body"}
              textAlign={"center"}
            >
              Timecards Approval
            </Heading>
            <Text fontSize="14px" textAlign={"center"} color={"gray.500"}>
              Track clock in and out times with no effort.
            </Text>
          </Stack>
        </Box>

        {/* //2 */}
        <Box
          maxW={"445px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.900")}
          p={6}
          overflow={"hidden"}
        >
          <Box h={"210px"} mt={-6} mx={-6} mb={6} pos={"relative"}>
            <Image
            width="80%"
            margin={"auto"}
            h="100%"
              src={
                "https://trackingtime.co/wp-content/themes/trackingtime-v5/img/keywords/slider-2.svg"
              }
              layout={"fill"}
            />
          </Box>
          <Stack>
            <Heading
              color={useColorModeValue("gray.700", "white")}
              fontSize={"lg"}
              fontFamily={"body"}
              textAlign={"center"}
            >
              Budgeting
            </Heading>
            <Text fontSize="14px" textAlign={"center"} color={"gray.500"}>
              Keep your projects on time and budget.
            </Text>
          </Stack>
        </Box>

        {/* 3 */}
        <Box
          maxW={"445px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.900")}
          p={6}
          overflow={"hidden"}
        >
          <Box h={"210px"} mt={-6} mx={-6} mb={6} pos={"relative"}>
            <Image
            width="80%"
            margin={"auto"}
            h="100%"
              src={
                "https://trackingtime.co/wp-content/themes/trackingtime-v5/img/keywords/slider-3.svg"
              }
              layout={"fill"}
            />
          </Box>
          <Stack>
            <Heading
              color={useColorModeValue("gray.700", "white")}
              fontSize={"lg"}
              fontFamily={"body"}
              textAlign={"center"}
            >
              Work schedules
            </Heading>
            <Text textAlign={"center"} fontSize="14px" color={"gray.500"}>
              Specify when your employees are expected to be at their job.
            </Text>
          </Stack>
        </Box>

        {/* 4 */}

        <Box bg="white" p={6} overflow={"hidden"}>
          <Box h={"210px"} mt={-6} mx={-6} mb={6} pos={"relative"}>
            <Image
            width="80%"
            margin={"auto"}
            h="100%"
              src={
                "https://trackingtime.co/wp-content/themes/trackingtime-v5/img/keywords/slider-4.svg"
              }
              layout={"fill"}
            />
          </Box>
          <Stack>
            <Heading
              color={useColorModeValue("gray.700", "white")}
              fontSize={"lg"}
              fontFamily={"body"}
              textAlign={"center"}
            >
              Timesheet Audits
            </Heading>
            <Text textAlign={"center"} fontSize="14px" color={"gray.500"}>
              Avoid data inconsistencies with just one click.
            </Text>
          </Stack>
        </Box>
      </SimpleGrid>
    </Box>
  );
}
