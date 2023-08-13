import { Box } from "@chakra-ui/react"
import { AboutUsSection } from "./AboutUsSection"
import { HeroSection } from "./HeroSection"

export const LandingPage = () => {
    return (
      <>
      <HeroSection />
      <Box my={56}></Box>
      <AboutUsSection />
      </>
    )
  }
