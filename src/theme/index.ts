import { extendTheme } from '@chakra-ui/react';



import { defineStyleConfig } from '@chakra-ui/react'

const Button = defineStyleConfig({
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
      px: 6, // <-- these values are tokens from the design system
      py: 4, // <-- these values are tokens from the design system
    },
  },
  // Two variants: outline and solid
  variants: {
    outline: {
      border: '2px solid',
      borderColor: 'purple.500',
      color: 'purple.500',
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

/*

primary: #D09200;

black #2C2C2C;
white #FFFFFF;
customegrey: #D9D9D6;

*/
export const theme = extendTheme({
    components: {
        Button,
      },
  colors: {
    black: '#2C2C2C',
    white: '#FFFFFF',
    primary: "#D09200",
    customegrey: "#D9D9D6",
  },
  fonts: {
    heading: 'Montserrat, sans-serif, Syncopate',
    body: 'Montserrat, sans-serif, Syncopate',
  },
});
