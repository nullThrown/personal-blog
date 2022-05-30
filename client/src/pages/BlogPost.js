import { Box, Heading, Flex, Text, Center, Divider } from '@chakra-ui/react';
import MainContainer from '../components/base/MainContainer';
import { useQuery } from 'react-query';
import { fetchPosts } from '../api/posts';
import { useParams } from 'react-router-dom';
import { readableDate } from '../util/format';
import Header from '../components/layout/Header';
import MDEditor from '@uiw/react-md-editor';

const BlogPost = () => {
  let { id } = useParams();

  const { isLoading, data, isError, error } = useQuery('posts', fetchPosts);
  const singlePost = data?.find(post => post._id === id);

  if (isLoading) {
    return <h1>Im a spinner</h1>;
  }
  if (isError) {
    return <h1>something went wrong :(</h1>;
  }
  return (
    <MainContainer>
      <Header bannerImg="/img/castle.jpg" headingTxt="Dionysus" />
      <Box as="article" mt="2em">
        <Heading as="h3" fontSize="4xl" fontWeight="400" textAlign="center">
          {singlePost.title}
        </Heading>
        <Flex>
          <Text fontSize="md" mr="2px">
            Posted on
          </Text>
          <Text fontWeight="500" mr="5px">
            {readableDate(singlePost.createdAt)}
          </Text>
          <Center>
            <Text fontSize="md" mr="2px">
              By
            </Text>
            <Text fontSize="md" fontWeight="500">
              {singlePost.author}
            </Text>
          </Center>
        </Flex>
        <Text width="99%" margin="1em auto">
          <MDEditor.Markdown source={singlePost.body} />
        </Text>
        <Divider />
      </Box>
    </MainContainer>
  );
};

export default BlogPost;
