import React, { useState } from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Link,
  Button,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  //Chakra Ui Color Mode
  const bgGradient = useColorModeValue('linear(to-r, teal.200, green.200)', 'gray.700');
  const textColor = useColorModeValue('gray.800', 'white');
  const bg = useColorModeValue('white', 'gray.800');
  // to navigate to login page
  const navigate = useNavigate();
  // to show toast message
  const toast = useToast();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);

  const registerUser = async (event) => {
    event.preventDefault();
  
    if (agreeTerms) {
      const response = await fetch('https://bitcoin-backend.vercel.app/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password,
        }),
      });
  
      const data = await response.json();
  
      if (data.status === 'ok') {
        toast({
          title: 'Registration successful!',
          status: 'success',
          isClosable: true,
        });
        navigate('/');
      } else if (data.status === 'error') {
        toast({
          title: 'Registration Failed!',
          status: 'error',
          isClosable: true,
        });
      }
    } else {
      toast({
        title: 'Please agree to our terms and conditions',
        status: 'warning',
        isClosable: true,
      });
    }
  };
  

  return (
    <Flex align="center" justify="center" minH="100vh" bgGradient={bgGradient} fontFamily="Alkatra">
      <Box
        maxW={{ base: '90%', md: '80%' }}
        borderWidth="1px"
        borderRadius="lg"
        p="6"
        bg={bg}
        boxShadow="md"
        textColor={textColor}
      >
        <Box mb="6" textAlign="center">
          <Heading size="lg" fontWeight="bold" textColor="teal.500">
            Register
          </Heading>
          <Text fontSize="sm">Please fill in the form to create your account.</Text>
        </Box>
        <form>
          <FormControl id="firstName" isRequired>
            <FormLabel>First Name</FormLabel>
            <Input type="text" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Shreyas" autoComplete="given-name" />
          </FormControl>
          <FormControl id="lastName" mt="4" isRequired>
            <FormLabel>Last Name</FormLabel>
            <Input type="text" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Pathak" autoComplete="family-name" />
          </FormControl>
          <FormControl id="email" mt="4" isRequired>
            <FormLabel>Email address</FormLabel>
            <Input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="shreyas@example.com" autoComplete="email"/>
          </FormControl>
          <FormControl id="password" mt="4" isRequired>
            <FormLabel>Password</FormLabel>
            <Input type="password" name="password" placeholder="********" onChange={(e) => setPassword(e.target.value)} autoComplete="password"/>
          </FormControl>
          <FormControl mt="4" display="flex" alignItems="center">
            <Checkbox isChecked={agreeTerms} onChange={() => setAgreeTerms(!agreeTerms)}>
              I agree to the{' '}
              <Link color="teal.500" href="./terms">
                Terms and Conditions
              </Link>
            </Checkbox>
          </FormControl>
          <Button colorScheme="teal" size="lg" mt="6" w="100%" type="submit" onClick={registerUser} isDisabled={!agreeTerms}>
            Register
          </Button>
        </form>
        <Text mt="8" textAlign="center" fontWeight="bold">
          Already have an account? <br />
          <Link href="/" color="teal.500" fontWeight="semibold"
          >Login</Link>
        </Text>
      </Box>
    </Flex>
  );
};

export default Register;
