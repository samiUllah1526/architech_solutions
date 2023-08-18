import {
    Box,
    Text,
    Heading,
    Image,
    Container,
    HStack,
    SimpleGrid,
    Grid,
    GridItem,
} from '@chakra-ui/react'
import aboutUs2 from "@src/assets/aboutus_1.jpeg"
import aboutUs1 from "@src/assets/aboutus_2.jpeg"
import { AboutUsBadgeSvg } from '@src/components/svgs'
import { SectionTitle } from './SectionTitle'
import { SectionSubTitle } from './SectionSubTitle'
import { useMediaQuery } from '@chakra-ui/react'

export const AboutUsSection = () => {
    const [isTablet] = useMediaQuery('(max-width: 767px)')
    const [isAbove1200] = useMediaQuery('(min-width: 1200px)')
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

                    {!isTablet && <Box position="relative" >
                        <Grid
                            // marginLeft={10}
                            // marginRight={10}
                            templateRows='repeat(5, 100px)'
                            templateColumns={{ base: 'repeat(1, 250px)', xl: 'repeat(2, 250px)' }}
                            columnGap={5}
                        >

                            <GridItem rowStart={1} rowEnd={{ base: 6, xl: 5 }} colSpan={{base: 2, xl: 1}}>
                                <Image objectFit='cover' objectPosition="center" height="100%" src={aboutUs1} alt='about us image' />
                                {isAbove1200 && <Box position="absolute" top="-80px" left="250px">
                                    <AboutUsBadgeSvg />
                                </Box>}
                            </GridItem>
                            {isAbove1200 && <GridItem rowStart={2} rowEnd={6} colStart={2}>
                                <Image objectFit='cover' objectPosition="center" height="100%"   src={aboutUs2} alt='about us image' />
                            </GridItem> }

                            {/* <GridItem rowStart={1} rowEnd={5} colSpan={1}>
                                <Image objectFit='cover' objectPosition="center" height="100%" src={aboutUs1} alt='about us image' />
                                <Box position="absolute" top="-80px" left="250px">
                                    <AboutUsBadgeSvg />
                                </Box>
                            </GridItem>
                            <GridItem rowStart={2} rowEnd={6} colStart={2}>
                                <Image objectFit='cover' objectPosition="center" height="100%"   src={aboutUs2} alt='about us image' />
                            </GridItem> */}
                        </Grid>
                    </Box>}
                </SimpleGrid>
                <Box my={10}></Box>
                <HStack justifyContent="space-between" flexDirection={{ base: "column", md: "row" }}>
                    {
                        [
                            {
                                number: "96%",
                                text: "SATISFITATION CLIENTS"
                            },
                            {
                                number: "12",
                                text: "EMPLOYEES ON WORLDWIDE"
                            },
                            {
                                number: "34",
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
