import React from 'react';
import { Box, ChakraProvider, theme } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Test from './pages/Test';
import Landing from './pages/Landing';
import Home from './pages/Home';
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Home />
    </ChakraProvider>
  );
}

export default App;

// component for changing color theme: light/dark
{
  /* <ColorModeSwitcher justifySelf="flex-end" /> */
}
