import {
    Box,
    Text,
    Heading,
    Container,
    HStack,
    Input,
} from '@chakra-ui/react'

export const ContactUsSection = () => {
    return (
        <>
            <Box py={20} bg="black">
                <Container maxW='90%' bg="transparent">
                    <Heading as='h2' size='xl' color="white">
                        Contact Us
                    </Heading>
                    <Text color="white" fontSize='18px' fontWeight='300px'>
                        If you are interested in our work and want to hire a project, contact us and ask for a price.
                    </Text>
                    <HStack justifyContent="space-between">
                        <Box>
                            <Input my={10} placeholder='Your name' size='md' variant='flushed' color="white" borderColor="white" focusBorderColor="white" />
                            <Input mb={10} type="email" placeholder='Your email' size='md' variant='flushed' color="white" borderColor="white" focusBorderColor="white" />
                            <Input mb={10} type="number" placeholder='Your number' size='md' variant='flushed' color="white" borderColor="white" focusBorderColor="white" />
                            <Input placeholder='Message' size='md' variant='flushed' color="white" borderColor="white" focusBorderColor="white" />
                        </Box>
                        <Box height="325px" width="2px" bg="white" />
                        <Box>
                            <Text color="white" fontSize='28px' fontWeight='300px'>
                                Our E-mail
                            </Text>
                            <Text color="white" fontSize='24px' fontWeight='300px'>
                                contact@architectural.com
                            </Text>
                            <Box my={5} />
                            <Text color="white" fontSize='28px' fontWeight='300px'>
                                Our Phone
                            </Text>
                            <Text color="white" fontSize='24px' fontWeight='300px'>
                                +1 408 568 4657
                            </Text>
                        </Box>
                    </HStack>
                </Container>
            </Box>
        </>
    )
}
