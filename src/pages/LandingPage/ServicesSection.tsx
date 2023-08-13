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
import { ManagementServiceSvg, RenovationServiceSvg, DesignServiceSvg } from '@src/components/svgs';
import { SectionTitle } from './SectionTitle'
import { SectionSubTitle } from './SectionSubTitle'

export const ServicesSection = () => {
    return (
        <>
            <Container maxW='90%' bg="transparent" py={3}>
                <Box w="55%">
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
                <HStack justifyContent="space-between" >
                    {
                        [
                            {
                                icon: <DesignServiceSvg />,
                                number: "Architectural & Interior design",
                                text: "Non diam pretium tristique augue placerat dolor. Accumsan nibh nunc, molestie volutpat ipsum, ultricies."
                            },
                            {
                                icon: <RenovationServiceSvg />,
                                number: "Building Renovation",
                                text: "Non diam pretium tristique augue placerat dolor. Accumsan nibh nunc, molestie volutpat ipsum, ultricies."
                            },
                            {
                                icon: <ManagementServiceSvg />,
                                number: "Construciton Management",
                                text: "Non diam pretium tristique augue placerat dolor. Accumsan nibh nunc, molestie volutpat ipsum, ultricies."
                            },
                        ]
                            .map((item, index) => {
                                return (
                                    <Card key={index} maxW='md' variant='elevated' sx={{ border: '1px solid #E6D8CC' }}>

                                        <CardBody>
                                            {item.icon}
                                            <Box my={10}></Box>
                                            <Heading as='h2' size='md'>
                                                {item.number}
                                            </Heading>
                                            <Text fontSize="14px ">
                                                {item.text}
                                            </Text>
                                        </CardBody>
                                    </Card>
                                )
                            })
                    }
                </HStack>
            </Container>
        </>
    )
}
