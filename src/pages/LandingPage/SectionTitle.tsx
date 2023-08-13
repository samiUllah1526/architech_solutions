import { Box, HStack, Text } from '@chakra-ui/react'

export const SectionTitle = ({ title} : { title: string}) => {
    return (
        <HStack spacing={4}>
            <Box width={16} height="1px" bg="primary"></Box>
            <Text color="primary" fontSize="14px" fontWeight="600">{title}</Text>
        </HStack>
    )
}
