import { Box } from "@chakra-ui/react"
import { AboutUsSection } from "./AboutUsSection"
import { HeroSection } from "./HeroSection"
import { ServicesSection } from "./ServicesSection"

export const LandingPage = () => {
    return (
      <>
      <HeroSection />
      <Box my={56}></Box>
      <AboutUsSection />
      <Box my={20}></Box>
      <ServicesSection />
      </>
    )
  }
