import { Box, Heading, Divider, VStack, Spinner } from '@chakra-ui/react';
import { useQuery } from 'react-query';
import { fetchPosts } from '../api/posts';
import MainContainer from '../components/base/MainContainer';
import SearchBox from '../components/form/SearchBox';
import Post from '../components/features/Post';
import CenterContainer from '../components/base/CenterContainer';
import Header from '../components/layout/Header';
const Home = () => {
  const { isLoading, data, isError, error } = useQuery('posts', fetchPosts);
  if (isLoading) {
    return (
      <CenterContainer>
        <Spinner size="xl" color="teal.600" />
      </CenterContainer>
    );
  }
  if (isError) {
    return <span>{error.message}</span>;
  }
  return (
    <MainContainer>
      <Header bannerImg="/img/the-fall-of-phaeton.jpg" headingTxt="Dionysus" />
      <SearchBox />
      <Divider m="1em 0" />
      <VStack spacing="32px" alignItems="left">
        {data.map(post => {
          return <Post key={post._id} post={post} />;
        })}
      </VStack>
    </MainContainer>
  );
};
export default Home;
