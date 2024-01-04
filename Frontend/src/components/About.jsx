import { Box, Flex, Heading, Image, Text, useColorModeValue } from '@chakra-ui/react';

import img from '../assets/mining.png';

function AboutSection() {
  const bgGradient = useColorModeValue('linear(to-r, teal.200, green.200)', 'gray.700');
  const textColor = useColorModeValue('gray.600', 'gray.400');
  
  return (
    <Flex
      bgGradient={bgGradient}
      color="white"
      mt={7}
      py={20}
      px={10}
      alignItems="center"
      justifyContent="center"
      flexDirection={{ base: 'column-reverse', md: 'row' }}
    >
      
      <Box maxW={{ base: '100%', md: '50%' }}>
      <Image
          src={img}
          alt="BitBazaar"
          css={{"&:hover": {transform: "scale(1.05)",boxShadow: "xl",},}}
          
        />
      </Box>

      <Box
        maxW={{ base: '100%', md: '50%' }}
        textAlign={{ base: 'center', md: 'left' }}
        mb={{ base: 10, md: 0 }}
        p={{ base: 0, md: 10 }}
        
      >
        <Heading as="h2" size="4xl" mb={5} color="teal" fontFamily="Alkatra" fontWeight={"bold"} css={{"&:hover": {transform: "scale(1.05)",boxShadow: "xl",}}}>
          What is BitBazaar?
        </Heading>
        <Text fontSize="2xl" fontFamily="Alkatra" letterSpacing="wide" color={textColor} css={{"&:hover": {transform: "scale(1.05)",boxShadow: "xl"},}}>
          BitBazaar is a leading platform for buying, selling, and trading
          cryptocurrencies. Our platform allows you to easily and securely
          invest in Bitcoin and other popular cryptocurrencies like Ethereum,
          Litecoin, and more.
        </Text>
    
        <Text fontSize="2xl" mt={5} fontFamily="Alkatra" letterSpacing="wide" color={textColor} css={{"&:hover": {transform: "scale(1.05)",boxShadow: "xl",},}}>
          Whether you're new to the world of cryptocurrency or a seasoned
          investor, BitBazaar has everything you need to start trading with
          ease. Sign up today and join the millions of users who trust BitBazaar
          for their cryptocurrency needs.
        </Text>
      </Box>
    </Flex>
  );
}

export default AboutSection;
