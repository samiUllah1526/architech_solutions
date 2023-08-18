import { Box, Text } from "@chakra-ui/react"
import { AboutUsSection } from "./AboutUsSection"
import { HeroSection } from "./HeroSection"
import { ServicesSection } from "./ServicesSection"
import { WorkflowSection } from "./WorkflowSection"
import { StartProjectSection } from "./StartProjectSection"
import { KickStartSection } from "./KickStartSection"
import { TestimonialSection } from "./TestimonialSection"
import { MarqueSection } from "./MarqueSection"
import { ContactUsSection } from "./ContactUsSection"


export const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <Box my={{base: 20, xl: 40}}></Box>
      <AboutUsSection />
      <Box my={20}></Box>
      <ServicesSection />
      <Box my={10}></Box>
      <WorkflowSection />
      <Box my={20}></Box>
      <MarqueSection />
      <Box my={20}></Box>
      <TestimonialSection />
      <Box my={{base: -40, lg: 10}}></Box>
      {/* THESE BELOW SECTION WILL BE AVAILABLE AFTER BE IS DONE FOR THEM */}
      {/* <Box my={-40}></Box>
     <StartProjectSection />
      <Box my={20}></Box>  */}
      {/* <KickStartSection />
      <Box my={20}></Box> */}
      <ContactUsSection />
    </>
  )
}
