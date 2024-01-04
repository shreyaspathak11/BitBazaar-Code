import React from 'react'
import error from '../images/error.png'
import { Image, Box } from '@chakra-ui/react'

const Error = () => {
  return (
    <div>
     <Image
     src={error}
        alt={"error"} 
        display={"block"}
        m={"auto"}
        w={"50%"}
      
      />
      <Box 
        textAlign={"center"}
        fontSize={"2xl"}
        fontWeight={"bold"}
        >404 Error</Box>
        
    </div>
  )
}

export default Error