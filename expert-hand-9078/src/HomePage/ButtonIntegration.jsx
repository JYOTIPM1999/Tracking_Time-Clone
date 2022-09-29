import React from 'react'
import { Box, Button, Flex, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react'
function ButtonIntegrations() {

    return (
        <Box bg={"#F3F3F3"} >
            <SimpleGrid columns={["1", "1", "2"]} p={["4", "10", "16", "28"]} gap="16">
                <Flex direction={"column"} gap="6" w={"90%"} >

                    <Text fontWeight={"medium"} color={"#25CF60"}> </Text>
                    <Box>

                        <Heading size={"lg"}>Add time tracking to</Heading>
                        <Heading size={"lg"}>your favorite business</Heading>
                        <Heading size={"lg"}>apps</Heading>
                    </Box>
                    <Text fontSize={"18px"} noOfLines={[9, 8, 6]}color="#7f8488"  >No matter where your employees work, TrackingTime works with them. Install the TrackingTime Button for Chrome and Firefox and track time right within the productivity apps your employees use everyday.</Text>

                    <Button size={"sm"} colorScheme='black' variant="outline" w={[ "10%", "20%","30%" ]} ><Text color="black">See All</Text></Button>
    
                </Flex>
                <SimpleGrid gap={"10"} columns={["2", "2", "3", "4"]}>
                    <Box bg={"white"} boxShadow={"rgba(149, 157, 165, 0.2) 0px 8px 24px"} boxSize={"115px"} borderRadius={"3xl"}>
                        <Image p={"7"} src='https://trackingtime.co/wp-content/themes/trackingtime-v5/img/temp/logos/asana.png'></Image>
                        {/* <Text as="b">Asana</Text> */}
                       
                    </Box>
                    <Box bg={"white"} boxShadow={"rgba(149, 157, 165, 0.2) 0px 8px 24px"} boxSize={"115px"} borderRadius={"3xl"}>
                        <Image p={"7"} src='https://trackingtime.co/wp-content/themes/trackingtime-v5/img/temp/logos/trello.png'></Image>
                    </Box>
                    <Box bg={"white"} boxShadow={"rgba(149, 157, 165, 0.2) 0px 8px 24px"} boxSize={"115px"} borderRadius={"3xl"}>
                        <Image p={"7"} src='https://trackingtime.co/wp-content/themes/trackingtime-v5/img/temp/logos/todoist.png'></Image>
                    </Box>
                    <Box bg={"white"} boxShadow={"rgba(149, 157, 165, 0.2) 0px 8px 24px"} boxSize={"115px"} borderRadius={"3xl"}>
                        <Image p={"7"} src='https://trackingtime.co/wp-content/themes/trackingtime-v5/img/temp/logos/smartsheet.png'></Image>
                    </Box>

                </SimpleGrid>
            </SimpleGrid>
        </Box>
    )
}

export default ButtonIntegrations