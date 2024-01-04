import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import SwiperCore, { Autoplay, Pagination } from 'swiper';
import img1 from '../images/Caraousel.jpg';
import img2 from '../images/Carousel 2.jpg';
import img3 from '../images/Carousel1.jpg';

SwiperCore.use([Autoplay, Pagination]);

function Carousel() {
  return (
    <Box maxW="6xl" marginX="auto" mt={8}>
      <Swiper
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000 }}
      >
        <SwiperSlide>
          <Flex
            bg="gray.100"
            h="lg"
            justify="center"
            align="center"
            backgroundImage={img3}
            backgroundSize="cover"
            backgroundPosition="center"
          >
            <Box textAlign="center" >
              <Heading as="h2" size="4xl"  mb={4} color={'White'} fontFamily={"Alkatra"} _hover={{ color: "Yellow", transform: "scale(1.05)"}}>
                Welcome to BitBazaar
              </Heading>
              <Text fontSize="3xl" fontWeight="semibold" color={'White'} fontFamily={"Alkatra"} _hover={{ color: "Yellow", transform: "scale(1.05)"}}>
                Your one-stop shop for all things Bitcoin.
              </Text>
            </Box>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex
            bg="gray.100"
            h="lg"
            justify="center"
            align="center"
            backgroundImage={img2}
            backgroundSize="cover"
            backgroundPosition="center"
          >
            <Box textAlign="top">
              <Heading as="h2" size="4xl" mb={3} color={"#FCE22A"} fontFamily={"Alkatra"} _hover={{  color: "teal.500", transform: "scale(1.05)",boxShadow: "xl"}}>
                Invest in Cryptocurrencies</Heading>
              <Text fontSize="3xl" fontWeight="semibold" color={"#FCE22A"} fontFamily={"Alkatra"} _hover={{ color: "teal.500", transform: "scale(1.05)",boxShadow: "xl"}}>
                Discover the benefits of investing in Future.
              </Text>
            </Box>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex
            bg="gray.100"
            h="lg"
            justify="center"
            align="center"
            backgroundImage={img1}
            backgroundSize="cover"
            backgroundPosition="center"
          >
            <Box textAlign="center">
              <Heading as="h2" size="4xl" mb={4} fontFamily={"Alkatra"} color={'whiteAlpha.800'} _hover={{ color: "Yellow", transform: "scale(1.05)"}}>
                Trade with Confidence
              </Heading>
              <Text fontSize="3xl" fontWeight="semibold" color={'whiteAlpha.800'} fontFamily={"Alkatra"} _hover={{ color: "Yellow", transform: "scale(1.05)"}}>
                Buy, sell, and trade Bitcoin like a pro with BitBazaar.
              </Text>
            </Box>
          </Flex>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}

export default Carousel;