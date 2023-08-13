import {
    Box,
    Text,
    Heading,
    Center,
    Image,
    Container,
    HStack,
    SimpleGrid,
    Card,
    CardBody,
} from '@chakra-ui/react'
import Marquee from "react-fast-marquee";
import marquee1 from '@src/assets/marquee1.png'

export const MarqueSection = () => {
    return (
        <>

            <Marquee>
                {
                    [1,2,3,4,5,6,7,8].map((item, index) => {
                        return (
                            <Box key={index} width="1000px" mx={5}>
                                <Image loading="lazy" src={marquee1}></Image>
                            </Box>
                        )
                    })
                }
            </Marquee>
            <Box my={5}></Box>

            <Marquee>
                <Text fontSize="48px" fontWeight="700" mx={5}>concrete graden</Text>
                <Text fontSize="48px" fontWeight="700" mx={5} color="primary">city vision uncovered</Text>
                <Text fontSize="48px" fontWeight="700" mx={5}>concrete graden</Text>
                <Text fontSize="48px" fontWeight="700" mx={5} color="primary">city vision uncovered</Text>
                <Text fontSize="48px" fontWeight="700" mx={5}>concrete graden</Text>
                <Text fontSize="48px" fontWeight="700" mx={5} color="primary">city vision uncovered</Text>
                <Text fontSize="48px" fontWeight="700" mx={5}>concrete graden</Text>
                <Text fontSize="48px" fontWeight="700" mx={5} color="primary">city vision uncovered</Text>
                <Text fontSize="48px" fontWeight="700" mx={5}>concrete graden</Text>
                <Text fontSize="48px" fontWeight="700" mx={5} color="primary">city vision uncovered</Text>
            </Marquee>
        </>
    )
}
