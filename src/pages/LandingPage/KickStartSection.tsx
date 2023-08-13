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
    Link,
} from '@chakra-ui/react'
import startProjectBg from '@src/assets/start-project-bg.png';
import { SectionTitle } from './SectionTitle'
import { SectionSubTitle } from './SectionSubTitle'

export const KickStartSection = () => {
    return (

        <>
            <Container maxW='90%' bg="transparent">
                <HStack justifyContent="space-between">
                    <Box>
                        <Heading as='h2' size='xl'>
                            Kick-start your dream home with us
                        </Heading>
                        <Link fontSize="48px" color="primary" fontStyle='italic'>Send us a hi</Link>
                    </Box>
                    <Box>
                        <Text fontSize='34px' fontWeight='300px'>
                            Brooklyn, New York
                        </Text>
                        <Text fontSize='14px' fontWeight='300px'>
                            962 Fifth Avenue Str, 3rd Floor-Trump
                        </Text>
                        <Text fontSize='14px' fontWeight='300px'>
                            Building NY 10006, United State.
                        </Text>
                        <Box mb={10}></Box>
                        <Text fontSize='14px' fontWeight='300px'>
                            Email us at.
                        </Text>
                        <Text fontSize='24px' fontWeight='300px' color='primary' mb={2}>
                            hello@landify.design
                        </Text>
                        <Text fontSize='14px' fontWeight='300px' mb={2}>
                            If you're hurry, quick call for us
                        </Text>
                        <Text fontSize='24px' fontWeight='300px' color='primary'>
                            +8(663)125-08-59
                        </Text>
                    </Box>
                </HStack>
            </Container>
        </>
    )
}
