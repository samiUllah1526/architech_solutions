import React from "react";
import { Insta } from "./icons";
import { Facebook } from "./icons";
import { YouTube } from "./icons";
import { Twitter } from "./icons";

import {
  Box,
  HStack,
  Divider,
  IconButton,
  Container,
  Stack,
  Text,
  extendTheme,
  ChakraProvider,
  Spacer
} from "@chakra-ui/react";

import { useMediaQuery } from "@chakra-ui/react";


const theme = extendTheme({
  colors: {
    brand: {
      primary: "#D09200",
    },
  },
});

const Footer = () => {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Box py={4}>
          <Container
            display="flex"
            flexDirection={{ base: "column", md: "row" }}
            alignItems="center"
            justifyContent="space-between"
            maxW="container.xl"
            mx="auto"
          >
            <Stack
              spacing={3}
              mb={{ base: 4, md: 0 }}
              order={{ base: 2, md: 1 }}
            >
              <Text fontSize="sm">
                &copy; 2022 Inteo - Award winning studio. Made with love by
                Landify
              </Text>
            </Stack>
            <HStack spacing={4} order={{ base: 1, md: 2 }}>
              <Text fontSize="sm">Connect:</Text>
              <Divider
                orientation="horizontal"
                height="1px"
                width="60px"
                bg="red"

                display={useMediaQuery("(min-width: 768px)") ? "block" : "none"}
              />

{/* <Spacer display={{ base: "block", md: "none" }} /> */}
              <IconButton
                aria-label="Facebook"
                icon={<Facebook />}
                bg="none"
                fontSize="6xl"
              />
              <IconButton
                aria-label="Instagram"
                icon={<Insta />}
                bg="none"
                fontSize="6xl"
              />
              <IconButton
                aria-label="YouTube"
                icon={<YouTube />}
                bg="none"
                fontSize="6xl"
              />
              <IconButton
                aria-label="Twitter"
                icon={<Twitter />}
                bg="none"
                fontSize="6xl"
              />
            </HStack>
          </Container>
        </Box>
      </ChakraProvider>
    </>
  );
};

export default Footer;

