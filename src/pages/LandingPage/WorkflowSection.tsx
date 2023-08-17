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
                    <Container>
                    <Box w={{ base: "100%", lg: "55%" }}>
                            <Box>
                                <SectionTitle title='OUR WORKFLOW' />
                                <Box mb={10}></Box>
                                <SectionSubTitle subTitle="How We Work" />
                                {/* <Box mb={10}></Box>
                                <Text fontSize='18px' fontWeight='300px'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla dui amet faucibus nam. Erat id laoreet posuere etiam morbi.</Text> */}
                            </Box>
                        </Box>
                        <Box my={10}></Box>
                        <HStack justifyContent="space-between" alignItems="stretch"  flexDirection={{ base: "column", lg: "row" }}>
                            {
                                [
                                    {
                                        number: "01",
                                        title: 'Statement of the problem',
                                        text: "Understanding the client needs and challenges for the project"
                                    },
                                    {
                                        number: "02",
                                        title: 'Project presentation',
                                        text: "Project presentation and updates on design constantly provided to the clients"
                                    },
                                    {
                                        number: "03",
                                        title: "PROJECT DELIVERY",
                                        text: "All the design outputs and source files provided to the clients "
                                    },
                                ]
                                    .map((item, index) => {
                                        return (
                                            <Card key={index} variant='elevated' sx={{ border: '1px solid #E6D8CC' }}>
                                                <CardBody>
                                                    <Heading as='h2' size='4xl' color="primary">
                                                        {item.number}
                                                    </Heading>
                                                    <Box my={5}></Box>
                                                    <Heading as='h2' size='md' textTransform="uppercase">
                                                        {item.title}
                                                    </Heading>
                                                    <Box my={5}></Box>
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
