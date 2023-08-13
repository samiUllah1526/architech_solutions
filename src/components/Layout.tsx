import { Header } from "./Header"
// import Footer from "./Footer"


interface Props {
    children: React.ReactNode
  }

export const Layout = ({ children }: Props) => {
  return (
    <>
    <Header />
    { children }
    {/* <Footer/> */}
    </>
  )
}
