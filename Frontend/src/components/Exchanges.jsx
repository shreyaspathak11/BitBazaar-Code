import { useEffect, useState } from 'react'
import axios from 'axios'
import { server } from '../index'
import { Container, HStack, Heading, VStack, Image, Text, useColorModeValue, Box } from '@chakra-ui/react'
import Loader from './Loader'
import Error from './Error'
import Header from './Header'
import Footer from './Footer'

const Exchanges = () => {
    const bgGradient = useColorModeValue('linear(to-r, teal.200, green.200)', 'gray.700');
    const textColor = useColorModeValue('gray.600', 'gray.400'); 

    const [exchanges, setExchanges] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchExchanges = async () => {
            try {
                const { data } = await axios.get(`${server}/exchanges`);
                setExchanges(data);
                console.log(data);
                setLoading(false);
            } catch (error) {
                setError(true);
                setLoading(false);
                console.log(error);
            }

    }
    fetchExchanges();
    }
    , [])

    if(error) return <div><Error /></div>
    
    else{
    return (
    <>
        <Header />    

        <Box bgGradient={bgGradient} textColor={textColor} padding={"8"} >
        <Container maxW={"container.xl"} centerContent>
            { loading ? ( 
                <Loader /> 
                ) : (
                <>
                    <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
                        {exchanges.map((i) => (
                            <ExchangeCard
                                key={i.id}       //without key, react will throw error
                                name={i.name}
                                img={i.image}
                                rank={i.trust_score_rank}
                                url={i.url}
                             />
                        ))}
                    </HStack>
                </>
            )}
        </Container>
        </Box>
        <Footer />
        </>
    );  
}
}

const ExchangeCard = ({name, img, rank, url}) => (
    
    <VStack w={"52"} shadow={"lg"} p={"8"} borderRadius={"lg"} transition={"all 0.3s"} m={"4"}
    css={{
        "&:hover": {
            transform: "scale(1.05)",
            boxShadow: "xl",
            cursor: "pointer",
            
        },
    }}>
        <Image
            src={img}
            alt={"Exchanges"}
            w={"10"}
            h={"10"}
            objectFit={"contain"}
        />
        <Heading size={"md"} noOfLines={1}>
        {rank}
        </Heading>
        <Text noOfLines={1}>
        {name}
        </Text>
    </VStack>


    
)



export default Exchanges