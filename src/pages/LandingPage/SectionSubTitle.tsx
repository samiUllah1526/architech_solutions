import { Heading } from '@chakra-ui/react'

export const SectionSubTitle = ({ subTitle }: { subTitle: string }) => {
    return (
        <Heading as='h2' size='2xl'>
            {subTitle}
        </Heading>
    )
}
