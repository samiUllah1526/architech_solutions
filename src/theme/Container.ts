import { defineStyleConfig, defineStyle } from '@chakra-ui/react'

const sizes = {
    lg: defineStyle({
        maxW: 'container.xl',
        py: '3',
        px: '10',
        bg: "transparent"
    }),
}

const defaultProps = {
    size: 'lg' as const,
}

export const Container = defineStyleConfig({
    sizes,
    defaultProps,
})
