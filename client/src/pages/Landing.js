import { Container, VStack, Heading, Text } from '@chakra-ui/react';
import Login from '../components/button/Login';
import Banner from '../components/misc/Banner';
import MainContainer from '../components/base/MainContainer';
const Landing = () => {
  return (
    <MainContainer>
      <Banner src="/img/lonely-tree.jpg" />
      <VStack mt="2em">
        <Heading size="md" weight="300">
          Have an Account? Login
        </Heading>
        <Text>You would know if you had one</Text>
        <Login />
      </VStack>
    </MainContainer>
  );
};
export default Landing;
