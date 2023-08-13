import { Heading } from '@chakra-ui/react'

export const SectionSubTitle = ({ subTitle, color }: { subTitle: string, color?: string }) => {
    return (
        <Heading as='h2' size='2xl' {...{ color }}>
            {subTitle}
        </Heading>
    )
}
