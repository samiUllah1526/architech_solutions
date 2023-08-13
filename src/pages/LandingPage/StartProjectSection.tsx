import {
    Box,
    Text,
    Heading,
    Button,
    Flex,
    Container,
    HStack,
    SimpleGrid,
    Card,
    CardBody,
} from '@chakra-ui/react'
import startProjectBg from '@src/assets/start-project-bg.png';
import { SectionTitle } from './SectionTitle'
import { SectionSubTitle } from './SectionSubTitle'

export const StartProjectSection = () => {
    return (
        <>
            <Box py={20} style={{ background: `url(${startProjectBg})`, backgroundSize: 'cover', aspectRatio: "3/2" }}>
                <Container maxW='90%' bg="transparent"  h="100%">
                    <Flex justify='end' alignItems='end' h="100%">
                        <Box bg="lightBlack"  w='600px' p={10} >
                        <Button variant='outline'>Subscribe To Our Email</Button>
                        <Box mb={10}></Box>
                            <Heading as='h2' size='xl' color="white">
                                Start Project With Us ?
                            </Heading>
                            <Text color="white" fontSize='18px' fontWeight='300px'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla dui amet faucibus nam. Erat id laoreet posuere etiam morbi.</Text>
                            <Box mb={10}></Box>
                            <Button
                                variant='solid'
                            >Start New</Button>
                        </Box>
                    </Flex>
                </Container>
            </Box>
        </>
    )
}
