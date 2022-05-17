import { Box, Heading, Divider, Flex, VStack } from '@chakra-ui/react';
import { MainContainer } from '../components/base/MainContainer';
import Banner from '../components/misc/Banner';
import MainNav from '../components/nav/MainNav';
import SearchBox from '../components/form/SearchBox';
import Post from '../components/base/Post';
const Home = () => {
  return (
    <MainContainer>
      <Box m="1em">
        <Heading w="100%">Hades</Heading>
      </Box>
      <Banner src="/img/the-fall-of-phaeton.jpg" />
      <MainNav />
      <SearchBox />
      <Divider m="1em 0" />
      <VStack spacing="32px">
        <Post />
        <Post />
      </VStack>
    </MainContainer>
  );
};
export default Home;
