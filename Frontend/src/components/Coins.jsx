import { useEffect, useState } from 'react'
import axios from 'axios'
import { server } from '../index'
import { Container, HStack, Heading, VStack, Image, Text, Button, RadioGroup, Radio, useColorModeValue, Box } from '@chakra-ui/react'
import Loader from './Loader'
import Error from './Error'
import { Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const Coins = () => {
    const bgGradient = useColorModeValue('linear(to-r, teal.200, green.200)', 'gray.700');
    const textColor = useColorModeValue('gray.600', 'gray.400');

    
    const [coins, setCoins] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(50)
    const [currency, setCurrency] = useState("inr")
    const buttonNo = new Array(132).fill(1)

    const currencySymbol = 
      currency === "inr" ? "₹" : currency === "eur" ? "€"  : "$"; 

    const changePage = (page) => {
        setPage(page);
        setLoading(true);
    }

    useEffect(() => {
        const fetchCoins = async () => {
            try {
                const { data } = await axios.get(`${server}/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1`);
                setCoins(data);
                console.log(data);
                setLoading(false);
            } catch (error) {
                setError(true);
                setLoading(false);
                console.log(error);
            }

    }
    fetchCoins();
    }
    , [currency, page])

    if(error) return <div><Error /></div>
    
    else{
    return (<>
            <Header />
        <Box bgGradient={bgGradient} textColor={textColor}>
        <Container maxW={"container.xl"} centerContent >
            { loading ? ( 
                <Loader /> 
                ) : (
                <>
                <RadioGroup value={currency} p={"8"} onChange={setCurrency}>
                    <HStack>
                        <Radio value={"inr"}>INR</Radio>
                        <Radio value={"usd"}>USD</Radio>
                        <Radio value={"eur"}>EUR</Radio>  
                    </HStack>
                </RadioGroup>

                    <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
                        {coins.map((i) => (
                            <CoinCard
                                id={i.id}
                                key={i.id}       //without key, react will throw error
                                name={i.name}
                                img={i.image}
                                price={i.current_price}
                                symbol={i.symbol}
                                currency_symbol={currencySymbol}
                             />
                        ))}
                    </HStack>

                   
                    <HStack w={"full"} overflowX={"auto"} p={"8"}>
                        { buttonNo.map((i, index) => (
                            <Button
                              key={index}
                              bgColor={"blackAlpha.400"}
                              color={"white"}
                              _hover={{bgColor: "blackAlpha.500"}}
                              onClick={() => changePage(index + 1)}
                            >
                                {index + 1} 
                            </Button>
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

const CoinCard = ({id, name, img, price, symbol, currency_symbol= "₹" }) => (
    <Link to={`/coins/${id}`} >     {/* target={"blank"} opens the link in same tab hence no wastage of tabs */}
    <VStack w={"52"} shadow={"lg"} p={"8"} borderRadius={"lg"} transition={"all 0.3s"} m={"4"}
    css={{"&:hover": {transform: "scale(1.05)",boxShadow: "xl",},}}>
        <Image
            src={img}
            alt={"Coins"}
            w={"10"}
            h={"10"}
            objectFit={"contain"}
        />
        <Heading size={"md"} noOfLines={1}>
        {price ? `${currency_symbol} ${price}` : "NA"}
        </Heading>
        <Text noOfLines={1}>
        {name}
        </Text>
        <Text noOfLines={1}>
        {symbol}
        </Text>
    </VStack>

    </Link>
)



export default Coins