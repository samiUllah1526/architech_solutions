import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import './App.css'

import { Layout } from '@src/components'
import { theme } from './theme'

export default function App() {
  return (
    <ChakraProvider theme={theme}>
    <Layout>
      <h1>Sami</h1>
    </Layout>
    </ChakraProvider>
  )
}
