import { ChakraProvider, theme } from '@chakra-ui/react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/index';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <AppRoutes />
      </Router>
    </ChakraProvider>
  );
}

export default App;
