import { Box, Heading, Divider, VStack } from '@chakra-ui/react';
import { useQuery } from 'react-query';
import fetchPosts from '../api/posts/fetchPosts';
import { MainContainer } from '../components/base/MainContainer';
import Banner from '../components/misc/Banner';
import MainNav from '../components/nav/MainNav';
import SearchBox from '../components/form/SearchBox';
import Post from '../components/features/Post';

const Home = () => {
  const { isLoading, data, isError, error } = useQuery('posts', fetchPosts);

  if (isLoading) {
    return <span>I'm a spinner...</span>;
  }
  if (isError) {
    return <span>{error.message}</span>;
  }
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
        {data.data.map(post => {
          return <Post key={post._id} post={post} />;
        })}
      </VStack>
    </MainContainer>
  );
};
export default Home;
