import { Box, Text } from "@chakra-ui/react"
import { AboutUsSection } from "./AboutUsSection"
import { HeroSection } from "./HeroSection"
import { ServicesSection } from "./ServicesSection"
import { WorkflowSection } from "./WorkflowSection"
import { StartProjectSection } from "./StartProjectSection"
import { KickStartSection } from "./KickStartSection"
import { TestimonialSection } from "./TestimonialSection"
import { MarqueSection } from "./MarqueSection"


export const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <Box my={56}></Box>
      <AboutUsSection />
      <Box my={20}></Box>
      <ServicesSection />
      <Box my={20}></Box>
      <WorkflowSection />
      <Box my={20}></Box>
      <MarqueSection />
      <Box my={20}></Box>
      <TestimonialSection />
      <Box my={-48}></Box>
      <StartProjectSection />
      <Box my={20}></Box>
      <KickStartSection />
    </>
  )
}
