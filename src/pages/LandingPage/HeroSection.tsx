import {
    Box,
    Text,
    Heading,
    Image,
    Container,
} from '@chakra-ui/react'
import heroImage from "@src/assets/hero-image.jpeg"
import { HeroCTASvg } from '@src/components/svgs'

export const HeroSection = () => {
    return (
        <>
            <Container>
                <Heading textAlign="center" as='h1' size={{ base: 'xl', xl: '4xl' }}>
                    Building Dreams, Crafting Spaces: Your Vision, Our Architecture
                </Heading>
                <Box mt={10} mb={10}></Box>
                <Text align="center">
                    Transforming Concepts into
                    Masterpieces: Elevating Spaces
                    through Impeccable Architectural
                    3D Modeling and Rendering
                    Services
                </Text>
                <Box mt={10} mb={24}></Box>
                <Box position="relative">
                    <Image borderRadius="lg" objectFit='cover' src={heroImage} alt='Dan Abramov' />
                    <Box position="absolute" top="-80px" left="150px">
                        <HeroCTASvg />
                    </Box>
                </Box>
            </Container>
        </>
    )
}
