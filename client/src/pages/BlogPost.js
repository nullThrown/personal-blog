import { Box, Heading, Flex, Text, Center, Divider } from '@chakra-ui/react';
import MainContainer from '../components/base/MainContainer';
import { useQuery } from '@chakra-ui/react';
import { fetchPosts, fetchSinglePost } from '../api/posts';
import { useParams } from 'react-router-dom';
import { readableDate } from '../util/format';
import { useEffect } from 'react';

const BlogPost = () => {
  // const { id } = useParams();
  // const { isLoading, isError, data } = useQuery(['posts'], fetchPosts);

  return (
    <></>
    // <MainContainer>
    //   <Box as="article">
    //     <Heading as="h3" fontSize="xl">
    //       {data.title}
    //     </Heading>
    //     <Flex>
    //       <Text fontSize="md" mr="2px">
    //         Posted on
    //       </Text>
    //       <Text fontWeight="500" mr="5px">
    //         {readableDate(data.createdAt)}
    //       </Text>
    //       <Center>
    //         <Text fontSize="md" mr="2px">
    //           By
    //         </Text>
    //         <Text fontSize="md" fontWeight="500">
    //           {data.author}
    //         </Text>
    //       </Center>
    //     </Flex>
    //     <Text width="99%" margin="1em auto" noOfLines={3}>
    //       {data.body}
    //     </Text>
    //     <Divider />
    //   </Box>
    // </MainContainer>
  );
};

export default BlogPost;
