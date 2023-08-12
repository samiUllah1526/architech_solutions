import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import './App.css'

import { Header } from '@src/components'
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: 'Montserrat, sans-serif',
    body: 'Montserrat, sans-serif',
  },
});




export default function App() {
  return (
    <ChakraProvider theme={theme}>
    <Header /> 
    </ChakraProvider>
  )
}
