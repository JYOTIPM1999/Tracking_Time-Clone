import React from "react";
import { Box, Flex, Image, Heading, Text } from "@chakra-ui/react";
import AppsIntegration from "./Grids/AppsIntegrationGrid";

const IntegrationsPage = () => {
  return (
    <Box
      bgColor="#f6f8f9"
      w="100%"
    >

      {/* ----------- Head -------------- */}
      <Box
        backgroundImage="url('https://trackingtime.co/wp-content/themes/trackingtime-v5/img/404/bottom.svg')"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        bgColor="#F0F8FF"
        backgroundColor="white"
        textAlign="left"
        // m="30px 0px"
      >
        <Box
          w="100%"
          p="55px"
          boxSizing="border-box"
          bgColor="rgb(240, 248, 255, 0.81)"
        >
          <Heading
            as="h4"
            size="md"
            letterSpacing="3px"
            m="15px 0"
            color="#242954"
          >
            TRACKING TIME BUTTON FOR CHROME
          </Heading>
          <Heading as="h4" size="3xl" m="25px 0" color="#242954">
            TrackingTime <br /> Integrations
          </Heading>
          <Heading
            as="h4"
            size="md"
            letterSpacing="3px"
            m="15px 0"
            color="#242954"
          >
            TIME TRACKING INTEGRATIONS THAT YOU'LL LOVE
          </Heading>
          <Text
            m="30px 0"
            fontSize="lg"
            fontWeight="600"
            w="70%"
            color="#7F8488"
          >
            Improve your time tracking and increase your productivity with these
            Integrations. See how much time you spend on each task or project!
            TrackingTime's integrations make it easy to keep track of your
            billable and non-billable tasks by integrating with more than 30
            apps.
          </Text>
          <Text
            m="30px 0"
            fontSize="lg"
            fontWeight="600"
            w="70%"
            color="#7F8488"
          >
            TrackingTime can be integrated with other apps, such as project
            management, accounting, and customer support. Get instant timesheets
            and analytics with TrackingTime!
          </Text>
        </Box>
      </Box>

      {/* ------------- App Grid ------------- */}
      <AppsIntegration />

      {/* -------------- App link ------------  */}
      <Flex
        // w="100vw"
        m="60px auto 0"
        h="140vh"
        boxSizing="borderBox"
        align="center"
      >
        <Image
          boxSize="150px"
          h="100%"
          w="45%"
          objectFit="contain"
          src="https://trackingtime.co/wp-content/themes/trackingtime-v5/img/temp/home/download-section/phone.png"
          alt="Dan Abramov"
        />
        <Box ml="7%" textAlign="left" w="35%">
          <Heading as="h3" size="xl" color="#242954">
            Track Everywhere
          </Heading>
          <Text m="30px 0" fontSize="md" color="#7F8488">
            Track your time everywhere you work with our mobile apps for iOS and
            Android.
          </Text>
          <Flex h="60px" mt="60px">
            <Image
              mr="15px"
              h="100%"
              w="60px"
              borderRadius="5px"
              bgColor="#2C3135"
              objectFit="contain"
              src="https://trackingtime.co/wp-content/themes/trackingtime-v5/img/temp/home/download-section/playstore.png"
              alt="App Store"
            />
            <Image
              h="100%"
              w="60px"
              borderRadius="5px"
              bgColor="#2C3135"
              objectFit="contain"
              src="https://trackingtime.co/wp-content/themes/trackingtime-v5/img/temp/home/download-section/apstore.png"
              alt="App Store"
            />
          </Flex>
        </Box>
      </Flex>

    </Box>
  );
};

export default IntegrationsPage;
