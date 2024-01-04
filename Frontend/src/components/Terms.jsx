import React from 'react';
import {
  Box,
  Container,
  Text,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react';

const TermsAndConditions = () => {
  const bg = useColorModeValue('#F5F5F5', 'gray.700');
  const textColor = useColorModeValue('gray.600', 'gray.400');
  const headingColor = useColorModeValue('gray.900', 'white');

  return (
    <Box bg={bg} color={textColor} fontFamily={'serif'}>
      <Container maxW="7xl" py="6">
        <Heading mb={6} color={headingColor} fontFamily={'serif'} textAlign={'center'}>
          Terms and Conditions
        </Heading>

        <Text mb={4}>
          Welcome to BitBazaar. By accessing or using our website, you agree to be bound by the
          following terms and conditions:
        </Text>

        <Text mb={4} fontWeight={'bold'}>
          Use of Website
        </Text>

        <Text mb={4}>
          BitBazaar provides a platform for users to buy and sell cryptocurrencies. You may use our
          website for lawful purposes only and in compliance with these terms and conditions. You
          agree not to use our website:
        </Text>

        <Box pl={4} mb={4}>
          <Text>- In any way that violates any applicable federal, state, local, or international law or regulation</Text>
          <Text>- To engage in any activity that could cause harm to others</Text>
          <Text>- To engage in any activity that could interfere with the functioning of our website</Text>
          <Text>- To impersonate any person or entity, or falsely state or otherwise misrepresent yourself or your affiliation with any person or entity</Text>
        </Box>

        <Text mb={4}>
          We reserve the right to terminate or suspend access to our website at any time without
          notice or liability.
        </Text>

        <Text mb={4} fontWeight={'bold'}>
          User Accounts
        </Text>

        <Text mb={4}>
          To access certain features of our website, you may be required to register for an account
          with us. When you create an account with us, you agree to provide accurate and complete
          information about yourself and to update it as necessary. You are responsible for
          maintaining the confidentiality of your account information and for all activities that
          occur under your account.
        </Text>

        <Text mb={4}>
          We reserve the right to refuse service, terminate accounts, or remove or edit content in
          our sole discretion.
        </Text>

        <Text mb={4} fontWeight={'bold'}>
          Intellectual Property
        </Text>

        <Text mb={4}>
          Our website and its entire contents, features, and functionality are owned by BitBazaar
          and are protected by United States and international copyright, trademark, patent, trade
          secret, and other intellectual property or proprietary rights laws.
        </Text>

        <Text mb={4}>
          You may not use, reproduce, distribute, modify, create derivative works of, publicly
          display, publicly perform, republish, download, store, or transmit any of the material on
          our website, except as follows:
        </Text>

        <Box pl={4} mb={4}>
            <Text>- Your computer may temporarily store copies of such materials in RAM incidental to your accessing and viewing those materials</Text>
            <Text>- You may store files that are automatically cached by your web browser for display enhancement purposes</Text>
            <Text>- You may print or download one copy of a reasonable number of pages of our website for your own personal, non-commercial use and not for further reproduction, publication, or distribution</Text>
            <Text>- If we provide desktop, mobile, or other applications for download, you may download a single copy to your computer or mobile device solely for your own personal, non-commercial use, provided you agree to be bound by our end user license agreement for such applications</Text>
            <Text>- If we provide social media features with certain content, you may take such actions as are enabled by such features</Text>
        </Box>
        </Container>
    </Box>
    );  
};

export default TermsAndConditions;
