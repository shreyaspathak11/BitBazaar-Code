import React, { useState } from 'react';
import {
  Box,
  Container,
  Heading,
  Input,
  Stack,
  Button,
  Text,
  useColorModeValue,
  Link,
  useToast,
  Flex,
  Spinner, // Import Spinner
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setAuthenticated }) => {
  const bgGradient = useColorModeValue('linear(to-r, teal.200, green.200)', 'gray.700');
  const textColor = useColorModeValue('gray.700', 'gray.100');
  const toast = useToast();

  const [loading, setLoading] = useState(false); // Initialize loading state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  async function loginUser(event) {
    event.preventDefault();

    setLoading(true); // Set loading to true when the login process starts

    try {
      const response = await fetch('https://bitcoin-backend.vercel.app/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (!response.ok) {
        throw new Error('Login failed. Please check your credentials.');
      }

      const data = await response.json();

      if (data.user) {
        localStorage.setItem('token', data.user);
        toast({
          title: 'Login successful!',
          status: 'success',
          isClosable: true,
        });
        setAuthenticated(true);
        navigate('/home');
      } else {
        toast({
          title: 'Login failed!',
          description: data.error || 'Please check your credentials and try again.',
          status: 'error',
          isClosable: true,
        });
      }
    } catch (error) {
      console.error('Error during login:', error);
      toast({
        title: 'Login failed!',
        description: 'An unexpected error occurred. Please try again.',
        status: 'error',
        isClosable: true,
      });
    } finally {
      setLoading(false); 
    }
  }

  return (
    <Flex minH="100vh" bgGradient={bgGradient} align="center" justify="center" textColor={textColor} fontFamily={'Alkatra'}>
      <Container
        maxW={{ base: 'xs', md: 'md' }}
        bg={'white'}
        boxShadow={'lg'}
        rounded={'lg'}
        p={6}
        direction="column"
      >
        <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} textAlign="center" fontFamily={'Alkatra'} mb={5}>
          Login to Your Account
        </Heading>
        <Box mt={8} mb={3}>
          <Input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            size="lg"
            rounded="full"
            autoComplete="email" 
          />
        </Box>
        <Box mb={6}>
          <Input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            size="lg"
            rounded="full"
            autoComplete="current-password" 
          />
        </Box>
        <Stack spacing={6}>
          <Button
            bg={'teal.500'}
            color={'white'}
            _hover={{ bg: 'teal.600' }}
            rounded={'full'}
            size="lg"
            onClick={loginUser}
            disabled={loading} 
          >
            {loading ? <Spinner size="sm" color="white" /> : 'Login'}
          </Button>
          <Stack direction={{ base: 'column', md: 'row' }} align={'center'} justify={'space-between'}>
            <Text fontSize="md">
              Don't have an account?{' '}
              <Link color="teal.500" href="register" fontWeight="semibold">
                Sign Up
              </Link>
            </Text>

          </Stack>
        </Stack>
      </Container>
    </Flex>
  );
};

export default Login;
