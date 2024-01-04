import React from "react";
import { Box, Flex, Heading, Text, Button, Image, useColorModeValue, HStack} from "@chakra-ui/react";
import graphics1 from "../assets/graphics1.png";
import graphics2 from "../assets/graphics2.png";
import { Link } from "react-router-dom";


function CreativeSection() {
  const bgGradient = useColorModeValue('linear(to-r, teal.200, green.200)', 'gray.700');
  const textColor = useColorModeValue('gray.600', 'gray.400');

  return (
    <Box py={10} bgGradient={bgGradient} fontFamily={"Alkatra"} textColor={textColor}>
      <Flex
        maxW="100%"
        mx="auto"
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        px={4}
      >
        <Image
          src={graphics1}
          alt="Graphic 1"
          maxW={{ base: "250px", md: "300px" }}
          mr={{ base: 0, md: 4 }}
          mb={{ base: 4, md: 0 }}
          borderRadius="md"
          css={{"&:hover": {transform: "scale(1.05)",boxShadow: "xl",},}}
        />
        <Box maxW="500px" mb={{ base: 8, md: 0 }} textAlign="center" alignItems={"center"}>
          <Heading size="2xl"  mb={4} fontFamily={"Alkatra"} css={{"&:hover": {color:"teal", transform: "scale(1.05)",boxShadow: "xl",},}}>
            Trade with Confidence
          </Heading>
          <Text size="xl"  mb={8} css={{"&:hover": {transform: "scale(1.05)",boxShadow: "xl",},}}>
          At BitBazaar, we take pride in providing a secure and user-friendly trading environment that empowers traders of all levels
          </Text>
          <HStack  justifyContent="center" direction={{ base: 'column', md: 'row' }}  w={"full"} overflowX={"auto"} p={"8"}>
          <Button colorScheme="teal" variant="solid" size="lg"  _hover={{ transform:"scale(1.05)", colorScheme:"Yellow"}} >
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
        <Image
          src={graphics2}
          alt="Graphic 2"
          maxW={{ base: "250px", md: "300px" }}
          mr={{ base: 0, md: 4 }}
          mb={{ base: 4, md: 0 }}
          borderRadius="md"
          css={{"&:hover": {transform: "scale(1.05)",boxShadow: "xl",},}}
        />
      </Flex>
    </Box>
  );
}

export default CreativeSection;
