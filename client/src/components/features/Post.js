import { Box, Heading, Flex, Text, Center, Divider } from '@chakra-ui/react';
import { readableDate } from '../../util/format';

const Post = ({ post }) => {
  return (
    <Box as="article">
      <Heading as="h3" fontSize="xl">
        {post.title}
      </Heading>
      <Flex>
        <Text fontSize="md" mr="2px">
          Posted on
        </Text>
        <Text fontWeight="500" mr="5px">
          {readableDate(post.createdAt)}
        </Text>
        <Center>
          <Text fontSize="md" mr="2px">
            By
          </Text>
          <Text fontSize="md" fontWeight="500">
            {post.author}
          </Text>
        </Center>
      </Flex>
      <Text width="99%" margin="1em auto">
        {post.body}
      </Text>
      <Divider />
    </Box>
  );
};

export default Post;
