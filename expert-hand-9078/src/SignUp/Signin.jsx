import { Box, Flex, Image, Input } from "@chakra-ui/react";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaMicrosoft } from "react-icons/fa";
import { Center, Button, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function SignIn() {
  return (
    <Box>
      <Flex>
        <Box>
          <Image
            src="https://pro.trackingtime.co/img/ui-login-background.svg"
            alt="Image"
          />
        </Box>
        <Box></Box>
      </Flex>

      <Box>
        <Stack spacing={2} align={"center"} maxW={"md"} w={"full"}>
          <Button w={"full"} variant={"outline"} leftIcon={<FcGoogle />}>
            <Center>
              <Text>Sign in with Google</Text>
            </Center>
          </Button>

          <Button w={"full"} colorScheme="gray" leftIcon={<FaApple />}>
            <Center>
              <Text>Sign in with Apple</Text>
            </Center>
          </Button>

          <Button w={"full"} colorScheme={"gray"} leftIcon={<FaMicrosoft />}>
            <Center>
              <Text>Sign in with Microsoft</Text>
            </Center>
          </Button>
        </Stack>
      </Box>

        <Stack spacing={5}>
          <form>
            <Input size="sm" placeholder="Email Address" type="email" />

            <Input size="sm" placeholder="password" type="password" />
            <Button>SignUp</Button>
          </form>
        </Stack>
        <Box>
            <Text>Don'thave an account?<Link to="/signup">SignUp instead</Link> </Text>
        </Box>
   
    </Box>
  );
}
