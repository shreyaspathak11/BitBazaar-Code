import React from 'react';
import {
  Box,
  Flex,
  Button,
  Heading,
  Text,
  Image,
  useColorModeValue,
  HStack,
} from '@chakra-ui/react';

import heroImage from '../assets/growth.png';
import { Link } from 'react-router-dom';


function Hero() {
  const bgGradient = useColorModeValue('linear(to-r, teal.200, green.200)', 'gray.700');
  const textColor = useColorModeValue('gray.600', 'gray.400');

  return (
    <Flex
      align="center"
      justify="space-between"
      w="100%"
      h={{ base: 'auto', md: '80vh' }}
      py={{ base: '6', md: '16' }}
      px={{ base: '4', md: '16', lg: '32' }}
      bgGradient={bgGradient}
      color="white"
    >
      <Box w={{ base: 'full', md: '50%' }} pr={{ md: '8' }} d="flex" justifyContent="center">
        <Heading
          as="h1"
          size="4xl"
          fontWeight="extrabold"
          lineHeight="shorter"
          mb="6"
          color="#FCE22A"
          fontFamily={"Alkatra"}
          _hover={{ transform:"scale(1.05)"}}
        >
          Welcome to BitBazaar
        </Heading>
        <Text fontSize="lg" mb="8" size="3xl" textColor={textColor} fontFamily={"Alkatra"} _hover={{ transform:"scale(1.05)"}}>
          Your one-stop shop for learning and trading in Cryptocurrencies.
        A one-stop-shop for all your cryptocurrency needs. Discover, trade, and learn with our user-friendly platform designed to empower you with the latest insights and tools to navigate the dynamic world of digital assets. Join the community of savvy investors and explore the future of finance with Bitbazaar today."
        </Text>
        <HStack fontFamily={"Alkatra"} direction={{ base: 'column', md: 'row' }}  w={"full"} overflowX={"auto"} p={"8"}>
          <Button colorScheme="teal" size="lg"  _hover={{ transform:"scale(1.05)", colorScheme:"Yellow"}} >
          <Link to="/exchanges">
            Exchanges
            </Link>
          </Button>
 
          <Button colorScheme="teal" size="lg" _hover={{ transform:"scale(1.05)", colorScheme:"Yellow"}} >
          <Link to="/Coins">
            Explore Coins
            </Link>
          </Button>
        </HStack>
      </Box>
      <Box
        w={{ base: 'full', md: '50%' }}
        display={{ base: 'none', md: 'block' }}
      >
        <Image
          src={heroImage}
          alt="hero image"
          w="90%"
          h="90%"
          objectFit="cover"
          _hover={{  transform: "scale(1.05)" }}
        />
      </Box>
    </Flex>
  );
}

export default Hero;
