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

export const WorkflowSection = () => {
    return (
        <>
            <Box position="relative" py={20} style={{ background: `url(${workflowBg})`  }} height="">
                    <Container maxW='90%' bg="transparent" py={3} height="">
                        <Box w="55%">
                            <Box>
                                <SectionTitle title='OUR WORKFLOW' />
                                <Box mb={10}></Box>
                                <SectionSubTitle subTitle="How We Work" />
                                <Box mb={10}></Box>
                                <Text fontSize='18px' fontWeight='300px'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla dui amet faucibus nam. Erat id laoreet posuere etiam morbi.</Text>
                            </Box>
                        </Box>
                        <Box my={10}></Box>
                        <HStack justifyContent="space-between" >
                            {
                                [
                                    {
                                        number: "01",
                                        title: 'Statement of the problem',
                                        text: "Non diam pretium tristique augue placerat dolor. Accumsan nibh nunc, molestie volutpat ipsum, ultricies."
                                    },
                                    {
                                        number: "02",
                                        title: 'Project presentation',

                                        text: "Non diam pretium tristique augue placerat dolor. Accumsan nibh nunc, molestie volutpat ipsum, ultricies."
                                    },
                                    {
                                        number: "03",
                                        title: "Landscape and urban Design",
                                        text: "Non diam pretium tristique augue placerat dolor. Accumsan nibh nunc, molestie volutpat ipsum, ultricies."
                                    },
                                ]
                                    .map((item, index) => {
                                        return (
                                            <Card key={index} maxW='md' variant='elevated' sx={{ border: '1px solid #E6D8CC' }}>
                                                <CardBody>
                                                    <Heading as='h2' size='4xl' color="primary">
                                                        {item.number}
                                                    </Heading>
                                                    <Box my={5}></Box>
                                                    <Heading as='h2' size='md'>
                                                        {item.title}
                                                    </Heading>
                                                    <Box my={10}></Box>
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
                </Box>
        </>
    )
}
