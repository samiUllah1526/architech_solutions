import {
    Box,
    Text,
    Heading,
    Button,
    Flex,
    Container,
} from '@chakra-ui/react'
import startProjectBg from '@src/assets/start-project-bg.png';

export const StartProjectSection = () => {
    return (
        <>
            <Box py={20} style={{ background: `url(${startProjectBg})`, backgroundSize: 'cover', aspectRatio: "3/2" }}>
                <Container h="100%">
                    <Flex justify={{base: "center" , lg:'end'}} alignItems={{base: "center" , lg:'end'}} h={{base: "auto", lg:"100%"}}>
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
