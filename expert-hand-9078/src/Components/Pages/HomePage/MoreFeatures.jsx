import {
    chakra,
    SimpleGrid,
    Box,
    Heading,
    Text,
    Stack,
    Avatar,
    useColorModeValue,
    Image
  
  } from '@chakra-ui/react';
  
  
  export default function MoreFeatures() {
    return (
      <Box maxW="100%" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
        <chakra.h1
          textAlign={'center'}
          fontSize={'lg'}
          py={10}
          fontWeight={'bold'}>
         THE FEATURES YOUR PROJECT MANAGEMENT APP IS MISSING.
        </chakra.h1>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        <Box
        bg="white"
        boxShadow={'2xl'}
        p={6}
        overflow={'hidden'}>
        <Box
          h={'310px'}
          mt={-6}
          mx={-6}
          mb={6}
          pos={'relative'}>
          <Image
            src={
              'https://trackingtime.co/wp-content/themes/trackingtime-v5/img/keywords/article-1.svg'
            }
            layout={'fill'}
          />
        </Box>
        <Stack>
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'lg'}
            fontFamily={'body'}
            textAlign={'center'}>
            Measure your team’s productivity
          </Heading>
          <Text  textAlign={'center'} color={'gray.500'}>
          Get a record of the worked hours and keep your projects in order, be abreast of ongoing or completed projects with our super friendly app.
          </Text>
        </Stack>
      </Box>

      {/* //2 */}
      <Box
        maxW={'445px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}>
        <Box
          h={'310px'}
          mt={-6}
          mx={-6}
          mb={6}
          pos={'relative'}>
          <Image
            src={
              'https://trackingtime.co/wp-content/themes/trackingtime-v5/img/keywords/article-2.svg'
            }
            layout={'fill'}
          />
        </Box>
        <Stack>
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'lg'}
            fontFamily={'body'}
            textAlign={'center'}>
         The most flexible reporting engine
          </Heading>
          <Text  textAlign={'center'} color={'gray.500'}>
          Project budgeting, client billing, payroll, productivity analytics and much more: No matter what kind of reports you need, TrackingTime has got you covered.
          </Text>
        </Stack>
      </Box>

      {/* 3 */}
      <Box
        maxW={'445px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}>
        <Box
          h={'310px'}
          mt={-6}
          mx={-6}
          mb={6}
          pos={'relative'}>
          <Image
            src={
              'https://trackingtime.co/wp-content/themes/trackingtime-v5/img/keywords/article-3.svg'
            }
            layout={'fill'}
          />
        </Box>
        <Stack>
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'lg'}
            fontFamily={'body'}
            textAlign={'center'}>
           Monitor your team’s workload, in real time
          </Heading>
          <Text  textAlign={'center'} color={'gray.500'}>
          See every work in progress and measure the productivity of your team by monitoring them in real time
          </Text>
        </Stack>
      </Box>
        </SimpleGrid>
      </Box>
    );
  }