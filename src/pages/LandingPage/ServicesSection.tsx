import {
    Box,
    Text,
    Heading,
    Container,
    Card,
    CardBody,
    Grid,
    GridItem
} from '@chakra-ui/react'
import { ManagementServiceSvg, RenovationServiceSvg, DesignServiceSvg } from '@src/components/svgs';
import { SectionTitle } from './SectionTitle'
import { SectionSubTitle } from './SectionSubTitle'

export const ServicesSection = () => {
    return (
        <>
            <Container id="services">
                <Box w={{ base: "100%", lg: "55%" }}>
                    <Box>
                        <SectionTitle title='OUR SERVICES' />
                        <Box mb={10}></Box>
                        <SectionSubTitle subTitle="We provide the best solutions for your dream home" />
                        <Box mb={10}></Box>
                        <Text fontSize='18px' fontWeight='300px'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla dui amet faucibus nam. Erat id laoreet posuere etiam morbi.</Text>
                        <Box mt={4} mb={0}></Box>
                        <Text fontSize='18px' fontWeight='300px'>Tempor dolor elementum tellus non ipsum faucibus. Justo, magna mauris posuere auctor justo. Habitant proin aliquet volutpat leo ultricies. Dui blandit eget vitae turpis ultrices aliquet nunc. Faucibus sit odio bibendum lobortis diam.</Text>
                    </Box>
                </Box>
                <Box my={10}></Box>
                <Grid templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)', xl: 'repeat(4, 1fr)' }} gap={6}>
                    {
                        [
                            {
                                icon: <DesignServiceSvg />,
                                number: "Client Consultation",
                                text: "We begin by engaging in a thorough discussion with you to understand your project's goals, scope, and vision. We listen attentively to your ideas, preferences, and requirements, ensuring that we grasp every detail that matters to you."
                            },
                            {
                                icon: <RenovationServiceSvg />,
                                number: "Conceptualization",
                                text: "Once we have a clear understanding of your project, our team of skilled architects, designers, and 3D artists put their creative minds to work. We conceptualize your ideas into digital sketches and rough drafts that capture the essence of your vision."
                            },
                            {
                                icon: <ManagementServiceSvg />,
                                number: "Design Development",
                                text: "Building upon the initial concepts, we refine the design based on your feedback and preferences. This iterative process ensures that the evolving design aligns perfectly with your expectations and aspirations."
                            },
                            {
                                icon: <ManagementServiceSvg />,
                                number: "Delivery",
                                text: "Once the 3D models and renderings are perfected, we deliver the final files to you. These files can be used for presentations, marketing materials, investor pitches, and more."
                            },
                        ]
                            .map((item, index) => {
                                return (
                                    <GridItem w='100%' >
                                        <Card key={index} h="100%" variant='elevated' sx={{ border: '1px solid #E6D8CC' }}>
                                            <CardBody>
                                                {item.icon}
                                                <Box my={10}></Box>
                                                <Heading as='h2' size='md' mb={5}>
                                                    {item.number}
                                                </Heading>
                                                <Text fontSize="14px ">
                                                    {item.text}
                                                </Text>
                                            </CardBody>
                                        </Card>
                                    </GridItem>
                                )
                            })
                    }
                </Grid>
            </Container>
        </>
    )
}
