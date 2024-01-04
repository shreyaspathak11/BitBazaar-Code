import React from 'react';
import {
  Box,
  Flex,
  Text,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import SwiperCore, { Autoplay } from 'swiper/core';
import { FaArrowRight } from 'react-icons/fa'
SwiperCore.use([Autoplay]);

const WelcomePage = () => {
  const bgGradient = useColorModeValue('linear(to-b, #FFFFFF, #27E1C1)', 'linear(to-b, #2D3748, #1A202C)');
  
  return (
    <Box bgGradient={bgGradient} w="100%" h="100%" p="8">
      <Flex direction="column" h="100%" justifyContent="center">
        <Box textAlign="center">
          <Text as="h1" fontSize={{ base: '4xl', md: '6xl' }} fontWeight="extrabold" mb={{ base: '4', md: '8' }}>
            Welcome to BitBazaar
          </Text>
          <Text as="p" fontSize={{ base: 'lg', md: '2xl' }} fontWeight="semibold" mb={{ base: '4', md: '8' }}>
            Your one-stop shop for all things cryptocurrency.
          </Text>
          <Link to="/main">
            <Button
              size={{ base: 'lg', md: 'xl' }}
              colorScheme="teal"
              fontWeight="bold"
              rightIcon={<FaArrowRight />}
              _hover={{ transform: "scale(1.05)",boxShadow: "xl" }}
              mb={{ base: '4', md: '8' }}
            >
            <Link to="/register">
              Continue
            </Link>
            </Button>
          </Link>
        </Box>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          loop={true}
          pagination={{ clickable: true }}
          style={{ width: '100%', height: '100%' }}
        >
          <SwiperSlide>
            <Box bg="gray.500" h="100%" w="100%" borderRadius="lg"></Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box bg="teal.500" h="100%" w="100%" borderRadius="lg"></Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box bg="purple.500" h="100%" w="100%" borderRadius="lg"></Box>
          </SwiperSlide>
        </Swiper>
      </Flex>
    </Box>
  );
};

export default WelcomePage;
