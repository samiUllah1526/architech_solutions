import { extendTheme } from '@chakra-ui/react';
import { Container } from './Container';
import { Button } from './Button';


/*

primary: #D09200;

black #2C2C2C;
white #FFFFFF;
customegrey: #D9D9D6;

*/

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
