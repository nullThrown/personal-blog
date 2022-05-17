import { Container } from '@chakra-ui/react';
import Login from '../pages/Login';
import Create from './Create';
const Test = () => {
  return (
    <Container maxW="800px" centerContent={true} mt="8em">
      <Create />
    </Container>
  );
};
export default Test;
