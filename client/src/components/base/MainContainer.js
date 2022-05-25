import React from 'react';
import { Container } from '@chakra-ui/react';
const MainContainer = ({ children }) => {
  return (
    <Container maxW="1000px" w="96%" centerContent={false} mt="2em">
      {children}
    </Container>
  );
};
export default MainContainer;
