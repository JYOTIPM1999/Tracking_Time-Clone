import React from "react";
import { blogsData } from "../Data/IntegrationAndBlogsData";
import {
    Box,
    Heading,
    Stack,
    Image,
    SimpleGrid,
  } from "@chakra-ui/react";


const BlogsGrid = () => {
  return (
    <SimpleGrid
      columns={[1, 2, 3]}
      spacing="15px"
      textAlign="center"
      w="100%"
      p="55px"
      boxSizing="border-box"
    >
      {blogsData.map((blog) => {
        return (
            <Box
            key={blog.title}
            maxW={"445px"}
            cursor="pointer"
            w={"full"}
            h="300px"
            boxShadow="0 6px 6px 0 rgb(0 0 0 / 11%)"
            borderRadius="0 0 5px 5px "
            p={6}
            // m="20px"
            overflow={"hidden"}
          >
            <Box
              h={"180px"}
              bg={"gray.100"}
              mt={-6}
              mx={-6}
              mb={6}
              pos={"relative"}
            >
              <Image
                src={blog.img}
                w="100%"
                bgColor={blog.bg}
                h="100%"
                layout={"fill"}
              />
            </Box>
            <Stack>
              <Heading
                fontSize={"xl"}
                fontFamily={"body"}
              >
                {blog.title}
              </Heading>
            </Stack>
          </Box>
        );
      })}
    </SimpleGrid>
  );
};

export default BlogsGrid;
