import React from "react";
import {
  InstaGramSvg,
  YouTubeSvg,
  FaceBookSvg,
  TwitterSvg,
} from "@src/components/svgs";

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
  Spacer,
} from "@chakra-ui/react";

export const Footer = () => {
  return (
    <>
      <Box py={4}>
        <Container
          display="flex"
          flexDirection={{ base: "column", md: "row" }}
          alignItems="center"
          justifyContent="space-between"
          maxW="90%"
        >
          <Stack mb={{ base: 4, md: 0 }} order={{ base: 2, md: 1 }}>
            <Text
              maxW={{ base: "100%", md: "container.sm" }}
              textAlign="center"
              fontSize=""
            >
              &copy; 2022 Inteo - Award winning studio. Made with love by
              Landify
            </Text>
          </Stack>
          <HStack mb={{ base: 4, md: 0 }} order={{ base: 1, md: 2 }} spacing={5}>
            <Text fontSize="sm" textTransform="uppercase" fontWeight="600">Connect</Text>
            <Divider
              orientation="horizontal"
              height="1px"
              width="60px"
              bg="black"
            />    
            <IconButton aria-label="Facebook" icon={<FaceBookSvg />} />
            <IconButton aria-label="Instagram" icon={<InstaGramSvg />} />
            <IconButton aria-label="YouTube" icon={<YouTubeSvg />} />
            <IconButton aria-label="Twitter" icon={<TwitterSvg />} />
          </HStack>
        </Container>
      </Box>
    </>
  );
};
