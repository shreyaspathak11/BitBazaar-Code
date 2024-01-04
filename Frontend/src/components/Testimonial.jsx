import React from 'react';
import {
  Box,
  Heading,
  Stack,
  Image,
  Text,

  useColorModeValue,

  
} from "@chakra-ui/react";

import man1 from "../assets/man1.png";
import man2 from "../assets/man2.png";
import man3 from "../assets/man3.png";

function Testimonials() {

  const textColor = useColorModeValue('gray.600', 'gray.400');

  return (
    <Box py="10" px="6" fontFamily="Alkatra" textColor={textColor}>
    <Heading size="2xl" mb="6" textAlign="center" fontFamily="Alkatra" css={{"&:hover": {transform: "scale(1.05)",boxShadow: "xl",},}}>
      What Our Customers Says
    </Heading>
    <Stack direction={{ base: 'column', md: 'row' }} spacing="10" justifyContent="center" >
      
      
      <Box textAlign="center">
        <Image
          src={man1}
          alt="man1"
          borderRadius="full"
          boxSize="150px"
          mx="auto"
          mb="4"
          w="200px"
          h="200px"
          css={{"&:hover": {transform: "scale(1.05)",boxShadow: "xl",},}}
        />
        <Heading size="lg" color={textColor} fontFamily={"Alkatra"} mt="2" mb="2" css={{"&:hover": {transform: "scale(1.05)",boxShadow: "xl",},}}>
        John Doe
        </Heading>
        <Text color="gray.400">I've been using BitBazaar for a few months now and it's been a great experience. The user interface is intuitive and the customer service is top-notch. Highly recommended!</Text>
      </Box>


      <Box textAlign="center">
        <Image
          src={man2}
          alt="man2"
          borderRadius="full"
          boxSize="150px"
          mx="auto"
          mb="4"
          w="200px"
          h="200px"
          css={{"&:hover": {transform: "scale(1.05)",boxShadow: "xl",},}}
        />
         <Heading size="lg" color={textColor} fontFamily={"Alkatra"} mt="2" mb="2" css={{"&:hover": {transform: "scale(1.05)",boxShadow: "xl",},}}>
          Jane Olive
        </Heading>
        <Text color="gray.400">I was hesitant to try out BitBazaar at first, but I\'m so glad I did. The platform is easy to use and the selection of coins is impressive. I\'ve already recommended it to my friends.</Text>
      </Box>
      
      
      
      
      <Box textAlign="center">
        <Image
          src={man3}
          alt="man3"
          borderRadius="full"
          boxSize="50px"
          mx="auto"
          mb="4"
          w="200px"
          h="200px"
          css={{"&:hover": {transform: "scale(1.05)",boxShadow: "xl",},}}
        />
         <Heading size="lg" color={textColor} fontFamily={"Alkatra"} mt="2" mb="2" css={{"&:hover": {transform: "scale(1.05)",boxShadow: "xl",},}}>
          Bob Johnson
        </Heading>
        <Text color="gray.400">BitBazaar has been a game-changer for me. I've been able to easily buy and sell coins without any issues. The fees are reasonable and the platform is reliable.</Text>
      </Box>
    </Stack>
  </Box>
  
  );
}

export default Testimonials;
