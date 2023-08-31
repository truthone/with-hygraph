import React from "react";
import { Box, Flex, ChakraProvider } from "@chakra-ui/react";

function myApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Flex w='full' minH='100vh' bgcolor='gray.100'>
        <Box maxW='70vw' m='auto'>
          <Component {...pageProps} />
        </Box>
      </Flex>
    </ChakraProvider>
  );
}

export default myApp;
