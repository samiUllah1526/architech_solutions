import {
    Box,
    Text,
    Image,
    Container,
} from '@chakra-ui/react'
import Marquee from "react-fast-marquee";
// import marquee1 from '@src/assets/marquee1.png'
import { SectionTitle } from './SectionTitle';
import g1 from '@src/assets/galllery/galllery_1.jpg'
import g2 from '@src/assets/galllery/galllery_2.jpg'
import g3 from '@src/assets/galllery/galllery_3.jpg'
import g4 from '@src/assets/galllery/galllery_4.jpg'
// import g5 from '@src/assets/galllery/galllery_5.jpg'
import g6 from '@src/assets/galllery/galllery_6.jpg'
import g7 from '@src/assets/galllery/galllery_7.jpg'
import g8 from '@src/assets/galllery/galllery_8.jpg'
import g9 from '@src/assets/galllery/galllery_9.jpg'

export const MarqueSection = () => {
    return (
        <Container id="gallery">
            <Box w={{ base: "100%", lg: "55%" }}>
                <Box>
                    <SectionTitle title='GALLERY' />
                    <Box mb={10}></Box>
                    <Box mt={4} mb={0}></Box>
                    {/* <SectionSubTitle subTitle="Global Dreams, Local Creations   Designing Inspirations Worldwide   Your Ambitions, Our Architectural Journey" /> */}
                    {/* <Text fontSize='18px' fontWeight='300px'>
                    </Text> */}
                </Box>
            </Box>
            <Box my={10}></Box>
            <Marquee>
                {
                    [g1, g2, g3, g4, g6, g7, g8, g9].map((item, index) => {
                        return (
                            <Box key={index} width={{base: "300px", md:"500px", lg: "1000px"}} mx={5} borderRadius="lg" overflow="hidden">
                                <Image loading="lazy" src={item} objectFit="cover" objectPosition="center"></Image>
                            </Box>
                        )
                    })
                }
            </Marquee>
            <Box my={5}></Box>

            <Marquee>
                {
                    [
                        "Global Dreams", 
                        "Local Creations", 
                        "Designing Inspirations Worldwide", 
                        "Your Ambitions", 
                        "Our Architectural Journey",
                    ].map((item, index) => {
                        const color = index % 2 === 0 ? "primary": "black"
                        return (
                            <Text color={color} fontSize={{ base: "24px", lg:"48px"}} fontWeight="700" mx={5}>{ item}</Text>
                        )
                    })
                }
            </Marquee>
        </Container>
    )
}
