import { extendTheme } from '@chakra-ui/react';
import { defineStyleConfig, defineStyle } from '@chakra-ui/react'

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
      px:6,
      py:6,
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

/*

primary: #D09200;

black #2C2C2C;
white #FFFFFF;
customegrey: #D9D9D6;

*/

const sizes = {
  lg: defineStyle({
    maxW: 'container.xl',
    py:'3',
    px:'10',
    bg:"transparent"
  }),
}

const defaultProps = {
  size: 'lg' as const ,
}


const Container = defineStyleConfig({
  sizes,
  defaultProps,
})

export const theme = extendTheme({
  components: {
    Button,
    Container,
  },
  colors: {
    black: '#2C2C2C',
    lightBlack: '#2C2C2C87',
    white: '#FFFFFF',
    primary: "#D09200",
    customegrey: "#D9D9D6",
  },
  fonts: {
    heading: 'Montserrat, sans-serif, Syncopate',
    body: 'Montserrat, sans-serif, Syncopate',
  },

});
