import { defineStyleConfig } from '@chakra-ui/react'

export const Button = defineStyleConfig({
    // The styles all button have in common
    baseStyle: {
        fontWeight: 'bold',
        borderRadius: '0px', // <-- border radius is same for all variants and sizes
    },
    // Two sizes: sm and md
    sizes: {
        sm: {
            fontSize: 'sm',
            px: 4, // <-- px is short for paddingLeft and paddingRight
            py: 3, // <-- py is short for paddingTop and paddingBottom
        },
        md: {
            fontSize: 'md',
            px: 8, // <-- these values are tokens from the design system
            py: 6, // <-- these values are tokens from the design system
        },
        lg: {
            fontSize: 'md',
            px: 10, // <-- these values are tokens from the design system
            py: 8, // <-- these values are tokens from the design system
        },
    },
    // Two variants: outline and solid
    variants: {
        outline: {
            px: 6,
            py: 6,
            border: 0,
            borderRadius: '100px',
            background: 'white',
            color: 'black',

        },
        solid: {
            bg: 'primary',
            color: '#FFFFFF',
        },
    },
    // The default size and variant values
    defaultProps: {
        size: 'md',
        variant: 'outline',
    },
})
