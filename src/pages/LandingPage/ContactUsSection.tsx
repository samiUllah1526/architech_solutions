import {
    Box,
    Text,
    Heading,
    Container,
    HStack,
    Input,
    Flex
} from '@chakra-ui/react'

export const ContactUsSection = () => {
    return (
        <>
            <Box id="contactUs" py={20} bg="black">
                <Container>
                    <Heading as='h2' size='xl' color="white">
                        Contact Us
                    </Heading>
                    <Text color="white" fontSize='18px' fontWeight='300px'>
                        If you are interested in our work and want to hire a project, contact us and ask for a price.
                    </Text>
                    <Flex justifyContent="space-between" flexDirection={{base: "column", xl: "row"}} gap={10}>
                    <Box >
                            <Input my={10} placeholder='Your name'  size='md' variant='flushed' color="white" borderColor="white" focusBorderColor="white" />
                            <Input mb={10} type="email" placeholder='Your email' size='md' variant='flushed' color="white" borderColor="white" focusBorderColor="white" />
                            <Input mb={10} type="number" placeholder='Your number'   size='md' variant='flushed' color="white" borderColor="white" focusBorderColor="white" />
                            <Input placeholder='Message' size='md' variant='flushed' color="white" borderColor="white" focusBorderColor="white" />
                        </Box>
                        <Box height={{ base: "2px", xl:"325px"}} width={{base: "50%", xl:"2px"}} marginInline={{base: "auto", xl: "0"}} bg="white" />
                        <Box>
                            {
                                [
                                    {
                                        label: "Phone ",
                                        content: "(203)547-3030",
                                    },
                                    {
                                        label: "Website",
                                        content: "architechsolution.com",

                                    },
                                    {
                                        label: "E-mail",
                                        content: "lenaDelphine@architechsolution.com"

                                    },
                                    {
                                        label: "Address ",
                                        content: "1001 S MAIN ST STE 500 KALISPELL, MT 59901",
                                    },
                                ].map(({ label, content }) => {
                                    return (
                                        <>
                                            <Text color="white" fontSize='28px' fontWeight='300px'>
                                                {label}
                                            </Text>
                                            <Text color="white" fontSize='16px' fontWeight='300px'>
                                                {content}
                                            </Text>
                                            <Box my={5} />
                                        </>
                                    )
                                })
                            }
                        </Box>
                    </Flex>
                </Container>
            </Box>
        </>
    )
}
