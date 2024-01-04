import React, { useState } from 'react';
import {
  Box,
  Flex,
  Button,
  Image,
  Text,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  IconButton,
  VStack,
  HStack,
  useColorMode,
  Switch,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { Link, useNavigate, useLocation } from 'react-router-dom';

import logo from '../assets/logo.png';

function Navbar({ setAuthenticated }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isMobile, setIsMobile] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();
  const navigate = useNavigate();
  const location = useLocation(); 
  const toast = useToast();

  const bg = useColorModeValue('#A7FFE4', 'gray.900');
  const textColor = useColorModeValue('gray.600', 'gray.400');
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  // Function to handle logout
  const handleLogout = async (setAuthenticated) => {
    try {
      const response = await fetch('https://bitcoin-backend.vercel.app/api/logout', {
        method: 'GET',
      });

      const data = await response.json();

      if (data.auth === false) {
        toast({
          title: 'Logout successful!',
          status: 'success',
          isClosable: true,
        });
        navigate('/');
        setAuthenticated(false);
      } else {
        toast({
          title: 'Logout failed!',
          status: 'error',
          isClosable: true,
        });
      }
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  // handle window resize to toggle isMobile state
  window.addEventListener("resize", () => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  });

  return (
    <Flex align="center" p={4} bgColor={bg} justifyContent={"space-between"} boxShadow={"xl"} textColor={textColor} borderColor={borderColor}>
      <Box>
        <Link to={"/home"}>
          <Image src={logo} alt="logo" boxSize="50px" css={{ "&:hover": { transform: "scale(1.05)", boxShadow: "xl", }, }} />
        </Link>
        <Box>
          <Text fontSize="sm" fontWeight="bold" fontFamily={"Alkatra"}>BitBazaar</Text>
        </Box>
      </Box>

      {/* Mobile view */}
      {isMobile ?
        <>
          <IconButton aria-label="Open menu" variant="ghost" onClick={onOpen} />
          <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Menu</DrawerHeader>
              <DrawerBody>
                <VStack spacing={4} align="stretch" fontFamily={"Alkatra"}>
                  {location.pathname !== '/home' && (
                    <Button variant="ghost" onClick={onClose}><Link to="/home">Home</Link></Button>
                  )}
                  {location.pathname !== '/coins' && (
                    <Button variant="ghost" onClick={onClose}><Link to="/coins">Coins</Link></Button>
                  )}
                  {location.pathname !== '/exchanges' && (
                    <Button variant="ghost" onClick={onClose}><Link to="/exchanges">Exchange</Link></Button>
                  )}
                  <Switch colorScheme="teal" isChecked={colorMode === "dark"} onChange={toggleColorMode} />
                </VStack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </>
        :
        // Desktop view
        <>
          <HStack spacing={2} fontFamily={"Alkatra"}>
            {location.pathname !== '/home' && <Button variant="ghost" size={"lg"}><Link to="/home">Home</Link></Button>}
            {location.pathname !== '/coins' && <Button variant="ghost" size={"lg"}><Link to="/coins">Coins</Link></Button>}
            {location.pathname !== '/exchanges' && <Button variant="ghost" size={"lg"}><Link to="/exchanges">Exchange</Link></Button>}
          </HStack>

          <HStack ml={2}>
            <Switch colorScheme="teal" size="lg" isChecked={colorMode === "dark"} onChange={toggleColorMode} />
            <Button onClick={() => handleLogout(setAuthenticated)} fontWeight="bold" fontFamily={"Alkatra"}>
            Logout
            </Button>
          </HStack>
        </>
      }
    </Flex>
  );
}

export default Navbar;
