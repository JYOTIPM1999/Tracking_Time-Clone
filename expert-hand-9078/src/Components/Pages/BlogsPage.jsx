import React from "react";

import BlogsGrid from "./Grids/BlogsGrid";
import { Image, Flex, Text, Heading, Box } from "@chakra-ui/react";

const BlogsPage = () => {
  return (
    <>
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="space-around"
        bgColor="#3a609b"
        color="white"
        cursor="pointer"
        p="40px"
        w="100%"
      >
        <Heading as="h4" size="sm" letterSpacing="1px" m="15px 0">
          TIMEKEEPING AND PRODUCTIVITY ARTICLES
        </Heading>
        <Box w="250px">
          <Image
            src="https://trackingtime.co/wp-content/uploads/2022/09/Ilustraciones-Blog-Post-New-Image_240x146px-BlogPost-A-3.svg"
            w="100%"
            // h="100%"
            layout={"fill"}
          />
        </Box>
        <Heading as="h4" size="xl" m="15px 0">
          Introducing Our Fresh New Look and Roadmap
        </Heading>
      </Flex>

      <BlogsGrid />
    </>
  );
};

export default BlogsPage;