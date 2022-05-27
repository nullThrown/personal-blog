import {
  FormControl,
  FormLabel,
  Input,
  Heading,
  Select,
  Textarea,
  Button,
  Flex,
  Box,
  Text,
  Center,
  VStack,
} from '@chakra-ui/react';
import ErrorMsg from '../typography/ErrorMsg';
import { useState } from 'react';
import { useMutation } from 'react-query';
import { createPost } from '../../api/posts';
import queryClient from '../../config/queryClient';
const CreatePost = () => {
  const [post, setPost] = useState({
    author: 'hades',
    title: '',
    body: '',
    category: '',
    private: true,
    keywords: ['test keyword1', '2', '3'],
  });
  const mutatePost = useMutation(post => createPost(post), {
    onSuccess: data => {
      console.log(data);
      queryClient.invalidateQueries('posts');
    },
    onError: error => {
      console.log(error.msg);
    },
  });

  const onInputChange = e => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    mutatePost.mutate(post);
  };
  if (mutatePost.isSuccess) {
    return (
      <VStack spacing="20px">
        <Flex
          w="100%"
          p="14px 0"
          bg="green.400"
          borderRadius="10px"
          justifyContent="center"
          alignItems="center"
        >
          <Text color="white" fontSize="xl">
            Post Created Successfully!
          </Text>
        </Flex>
        <Button
          type="button"
          onClick={() => mutatePost.reset()}
          size="lg"
          colorScheme="blackAlpha"
        >
          Add Another Post
        </Button>
      </VStack>
    );
  }
  return (
    <FormControl as="form" mt="2em" mb="10em">
      <Heading size="lg" fontWeight="500" textAlign="center">
        Add New Post
      </Heading>
      {mutatePost.isError && <ErrorMsg msg={mutatePost.error.msg} />}
      <FormLabel htmlFor="title">Title</FormLabel>
      <Input
        variant="flushed"
        id="title"
        name="title"
        w="50%"
        mb="2em"
        onChange={onInputChange}
      />
      <FormLabel htmlFor="category">Category</FormLabel>
      <Select
        variant="flushed"
        id="category"
        w="50%"
        mb="3em"
        name="category"
        onChange={onInputChange}
      >
        <option value="misc">Misc</option>
        <option value="misc">philosophy</option>
        <option value="misc">sentimental</option>
      </Select>
      <Textarea
        height="800px"
        size="md"
        placeholder="Let the thoughts flow..."
        name="body"
        onChange={onInputChange}
      />
      <Flex justifyContent="center" mt="2em">
        <Button
          type="submit"
          size="lg"
          colorScheme="green"
          onClick={handleSubmit}
          isLoading={mutatePost.isLoading}
        >
          Submit
        </Button>
      </Flex>
    </FormControl>
  );
};

export default CreatePost;
