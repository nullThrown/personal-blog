import {
  Box,
  Heading,
  Flex,
  Text,
  Center,
  Divider,
  Link,
} from '@chakra-ui/react';
import MDEditor from '@uiw/react-md-editor';
import { Link as RouterLink } from 'react-router-dom';
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
      <Text width="99%" margin="1em auto" noOfLines={3}>
        <MDEditor.Markdown source={post.body} />
      </Text>
      <Link as={RouterLink} to={`/post/${post._id}`}>
        Keep Reading
      </Link>

      <Divider />
    </Box>
  );
};

export default Post;
