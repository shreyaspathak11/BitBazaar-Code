import React from 'react';
import {
  Box,
  Container,
  Text,
  Flex,
  Stack,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  const bg = useColorModeValue('#A5F1E9', 'gray.900');
  const textColor = useColorModeValue('gray.600', 'gray.400');
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  return (
    <Box bg={bg} color={textColor} borderTopWidth="1px" borderColor={borderColor} fontFamily={"Alkatra"}>
      <Container as={Flex} maxW="7xl" py="6" flexWrap="wrap" justifyContent="space-between" alignItems="center">
        <Stack direction="row" spacing={4}>
          <IconButton
            aria-label="Github"
            icon={<FaGithub />}
            size="md"
            variant="ghost"
            _hover={{ bg: 'white', color: 'teal.500', transform: 'scale(1.05)', boxShadow: 'xl' }}
            onClick={() => window.open("https://github.com/shreyaspathak11")}
          />
          <IconButton
            aria-label="Instagram"
            icon={<FaInstagram />}
            size="md"
            variant="ghost"
            _hover={{ bg: 'white', color: 'teal.500', transform: 'scale(1.05)', boxShadow: 'xl' }}
            onClick={() => window.open('https://www.instagram.com/capturing.my.journey11')}
          />
          <IconButton
            aria-label="LinkedIn"
            icon={<FaLinkedin />}
            size="md"
            variant="ghost"
            _hover={{ bg: 'white', color: 'teal.500', transform: 'scale(1.05)', boxShadow: 'xl' }}
            onClick={() => window.open('https://www.linkedin.com/in/shreyas-pathak-11s')}
          />
        </Stack>

        <Stack direction={{ base: 'column', md: 'row' }} spacing={4} mt={{ base: 4, md: 0 }}>
          <Text fontSize="lg" fontWeight="bold" mr={2}>Stay up to date</Text>
          <Box
            as={Link}
            to="/newsletter"
            rounded="full"
            bg="blue.500"
            color="white"
            px="4"
            py="1"
            _hover={{ bg: 'blue.600' }}
            fontSize="sm"
            fontWeight="bold"
            textAlign="center"
            transition="0.2s"
            css={{ '&:hover': { transform: 'scale(1.05)', boxShadow: 'xl' } }}
          >
            Subscribe
          </Box>
        </Stack>

        <Text fontSize="sm" fontWeight="bold" mt={{ base: 4, md: 0 }}>
          &copy; {new Date().getFullYear()} BitBazaar. All rights reserved.
        </Text>
      </Container>
    </Box>
  );
};

export default Footer;
