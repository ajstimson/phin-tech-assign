import React from 'react';
import { ChakraProvider, Box, Center, VStack } from '@chakra-ui/react';
import phinTheme from './styles/theme';
import Header from './components/Header';
import List from './components/List';
import { useState } from 'react';

function App() {
  // Handles the state of the hide completed items checkbox
  const [hideDone, setHideDone] = useState(false);
  return (
    <ChakraProvider resetCSS theme={phinTheme}>
      <Box textAlign="center" fontSize="xl">
        <VStack direction={['column', 'row']} spacing={10}>
          <Header setHideDone={setHideDone} hideDone={hideDone} />
          <Center>
            <List hideDone={hideDone} />
          </Center>
        </VStack>
      </Box>
    </ChakraProvider>
  );
}

export default App;
