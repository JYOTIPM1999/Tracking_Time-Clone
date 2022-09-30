import { Flex, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import { appsData } from "../Data/IntegrationAndBlogsData";

const AppsIntegration = () => {
  return (
    <SimpleGrid
      columns={[1, 2, 3]}
      spacing="30px"
      textAlign="left"
      w="100%"
      p="55px"
      boxSizing="border-box"
    >
      {appsData.map((app) => {
        return (
          <Flex
            direction="column"
            alignItems="flex-start"
            m="20px 0px"
            key={app.title}
          >
            <Image
              boxSize="150px"
              p="20px"
              m="10 px 0px"
              borderRadius="5px"
              boxShadow="0px 10px 7.51px 0 rgb(0 0 0 / 11%)"
              h={["88px", "88px", "79px"]}
              w={["88px", "88px", "79px"]}
              src={app.img}
              alt="Airtable"
            />
            <Heading as="h4" size="lg" m="15px 0" color="#242954">
              {app.title}
            </Heading>
            <Text fontWeight="600" m="0" fontSize="md" color="#7a7978">
              {app.info}
            </Text>
          </Flex>
        );
      })}
    </SimpleGrid>
  );
};

export default AppsIntegration;
