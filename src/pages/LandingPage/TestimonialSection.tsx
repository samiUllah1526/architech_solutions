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
                                name: "Denis Zakerburg",
                                designation: 'UI/UX Designer',
                                testimonial: "Non diam pretium tristique augue placerat dolor. Accumsan nibh nunc, molestie volutpat ipsum, ultricies."
                            },
                            {

                                name: 'Robert Anyino',
                                designation: "Product Manager",
                                testimonial: "Non diam pretium tristique augue placerat dolor. Accumsan nibh nunc, molestie volutpat ipsum, ultricies."
                            },
                            {
                                name: "Denis Zakerburg",
                                designation: 'UI/UX Designer',
                                testimonial: "Non diam pretium tristique augue placerat dolor. Accumsan nibh nunc, molestie volutpat ipsum, ultricies."
                            },
                            {

                                name: 'Robert Anyino',
                                designation:"Product Manager",
                                testimonial: "Non diam pretium tristique augue placerat dolor. Accumsan nibh nunc, molestie volutpat ipsum, ultricies."
                            },
                            {
                                name: "Denis Zakerburg",
                                designation: 'UI/UX Designer',
                                testimonial: "Non diam pretium tristique augue placerat dolor. Accumsan nibh nunc, molestie volutpat ipsum, ultricies."
                            },
                            {

                                name: 'Robert Anyino',
                                designation: "Product Manager",
                                testimonial: "Non diam pretium tristique augue placerat dolor. Accumsan nibh nunc, molestie volutpat ipsum, ultricies."
                            },
                            {
                                name: "Denis Zakerburg",
                                designation: 'UI/UX Designer',
                                testimonial: "Non diam pretium tristique augue placerat dolor. Accumsan nibh nunc, molestie volutpat ipsum, ultricies."
                            },
                            {

                                name: 'Robert Anyino',
                                designation:"Product Manager",
                                testimonial: "Non diam pretium tristique augue placerat dolor. Accumsan nibh nunc, molestie volutpat ipsum, ultricies."
                            },
                        ]
                            .map((item, index) => {
                                return (
                   
                                    <Card key={index} maxW='lg' p={10} variant='elevated' sx={{ border: '1px solid #E6D8CC' }}>
                                        <CardBody>
                                            <HStack spacing={5} alignItems="start">
                                                <QuotationMarkSvg colored={index % 2 === 0}/>
                                                <Box >
                                                <Heading as='h2' fontSize="24px" color="primary">
                                                    {item.name}
                                                </Heading>
                                                <Heading as='h2' fontSize="16px" mt={2}>
                                                    {item.designation}
                                                </Heading>
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
