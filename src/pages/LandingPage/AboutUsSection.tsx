import {
    Box,
    Text,
    Heading,
    Center,
    Image,
    Container,
    HStack,
    SimpleGrid,
} from '@chakra-ui/react'
import aboutUs2 from "@src/assets/aboutUs2.png"
import aboutUs1 from "@src/assets/aboutUs1.png"
import { AboutUsBadgeSvg } from '@src/components/svgs'
import { SectionTitle } from './SectionTitle'
import { SectionSubTitle } from './SectionSubTitle'
import { useMediaQuery } from '@chakra-ui/react'

export const AboutUsSection = () => {
    const [isTablet] = useMediaQuery('(max-width: 767px)')
    console.log({ isTablet })
    return (
        <>
            <Container id='aboutUs'>
                <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={10}>
                    <Box>
                        <SectionTitle title='ABOUT US' />
                        <Box mb={10}></Box>
                        <SectionSubTitle subTitle="We help to bring your dream home to reality" />
                        <Box mb={10}></Box>
                        <Text fontSize='18px' fontWeight='300px'>
                            At ArchitechSolution, we don't just
                            create structures; we bring dreams
                            to life in three-dimensional form.
                            Our dedicated team of visionary
                            architects and skilled 3D artists
                            collaborate to turn your ideas into
                            captivating, photorealistic
                            renderings that allow you to see
                            and feel the future space before
                            it's even built.
                        </Text>
                        <Box mt={4} mb={0}></Box>
                    </Box>

                    {!isTablet && <Box position="relative" mt={{ base: 20, lg: 0 }}>
                        <SimpleGrid columns={2} spacing={10}>
                            <Box mt='-40px'>
                                <Image objectFit='contain' src={aboutUs1} alt='Dan Abramov' />
                                <Box position="absolute" top="-100px" left="300px">
                                    <AboutUsBadgeSvg />
                                </Box>
                            </Box>
                            <Box mt='60px'>
                                <Image objectFit='contain' src={aboutUs2} alt='Dan Abramov' />
                            </Box>
                        </SimpleGrid>
                    </Box>}
                </SimpleGrid>
                <Box my={10}></Box>
                <HStack justifyContent="space-between" flexDirection={{ base: "column", md: "row" }}>
                    {
                        [
                            {
                                number: "100%",
                                text: "SATISFITATION CLIENTS"
                            },
                            {
                                number: "250",
                                text: "EMPLOYEES ON WORLDWIDE"
                            },
                            {
                                number: "3469",
                                text: "PROJECTS COMPLETED ON 60 COUNTRIES"
                            },
                        ]
                            .map((item, index) => {
                                return (
                                    <HStack key={index} spacing={4} flexDirection={{ base: "column", xl: "row" }}>
                                        <Heading textAlign="center" as='h2' size='2xl'>
                                            {item.number}
                                        </Heading>
                                        <Text textAlign="center" fontSize="14px ">
                                            {item.text}
                                        </Text>
                                    </HStack>
                                )
                            })
                    }
                </HStack>
            </Container>
        </>
    )
}
