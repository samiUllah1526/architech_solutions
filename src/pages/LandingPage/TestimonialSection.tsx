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
import workflowBg from '@src/assets/workflow-bg.png';
import { SectionTitle } from './SectionTitle'
import { SectionSubTitle } from './SectionSubTitle'
import { Carousel, QuotationMarkSvg } from '@src/components/svgs';



export const TestimonialSection = () => {
    return (
        <>
            <Container maxW='90%' bg="transparent" py={3}>
                <Box w="55%">
                    <Box>
                        <SectionTitle title='OUR TESTIMONIALS' />
                        <Box mb={10}></Box>
                        <SectionSubTitle subTitle="What People thinks" />
                        <Box mb={10}></Box>
                        <Text fontSize='18px' fontWeight='300px'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla dui amet faucibus nam. Erat id laoreet posuere etiam morbi.</Text>
                    </Box>
                </Box>
                <Box my={10}></Box>
                <Carousel>
                    {/* <HStack justifyContent="space-between" > */}
                    {
                        [
                            {
                                name: "Sarah Thompson",
                                designation: 'Client',
                                testimonial: "ArchitechSolution brought my architectural vision to life like magic! The attention to detail in their 3D models is exceptional. Their team's dedication ensured that every element, from textures to lighting, was flawlessly executed. I couldn't be happier with the realistic renderings that allowed me to visualize my project before construction even began."
                            },
                            {

                                name: 'Michael Collins',
                                designation: "Client",
                                testimonial: "Working with ArchitechSolution was an absolute pleasure. Their talented team understood the nuances of my project and translated them into stunning 3D visuals. The level of accuracy in their renderings helped me make critical design decisions confidently. Their professionalism and commitment to excellence truly set them apart."
                            },
                            {
                                name: "Emily Martinez",
                                designation: 'Client',
                                testimonial: "ArchitechSolution exceeded my expectations at every turn. The level of professionalism and creativity they brought to my project was outstanding. Their 3D renderings breathed life into my concept, allowing me to showcase my ideas to potential investors effectively. I'm incredibly grateful for their expertise and seamless communication."
                            },
                            {

                                name: 'David Walker',
                                designation: "Client",
                                testimonial: "ArchitechSolution turned my abstract ideas into concrete representations with their impeccable 3D modeling. The realism in their renderings was mind-blowing, making it easy for me to communicate my vision to my team and clients. Their commitment to delivering on time and capturing the essence of my designs is truly commendable."
                            },
                            {
                                name: "Sophia Lee",
                                designation: 'Client',
                                testimonial: "Collaborating with ArchitechSolution was a game-changer for my project. Their dedication to understanding my aesthetic preferences and translating them into visually stunning 3D models was remarkable. The attention they gave to even the smallest details made the renderings feel lifelike and inviting. I couldn't have asked for a better partner in bringing my architectural dreams to life."
                            },
                        ]
                            .map((item, index) => {
                                return (

                                    <Card key={index} p={10} variant='elevated' sx={{ border: '1px solid #E6D8CC' }}>
                                        <CardBody>
                                            <HStack spacing={5} alignItems="center">
                                                <QuotationMarkSvg colored={index % 2 === 0} />
                                                <Box >
                                                    <Heading as='h2' fontSize="24px" color="primary">
                                                        {item.name}
                                                    </Heading>
                                                    {/* <Heading as='h2' fontSize="16px" mt={2}>
                                                        {item.designation}
                                                    </Heading> */}
                                                </Box>

                                            </HStack>
                                            <Box my={5}></Box>
                                            <Text fontSize="14px ">
                                                {item.testimonial}
                                            </Text>
                                        </CardBody>
                                    </Card>
                                )
                            })
                    }
                </Carousel>
            </Container>
        </>
    )
}
