import { Header } from "./Header"
import { Footer } from "./Footer"
import { Divider, Box } from "@chakra-ui/layout"


export const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      {children}
      <Divider my={10} orientation='horizontal' />
      <Footer />
      <Box mb={20} />
    </>
  )
}
