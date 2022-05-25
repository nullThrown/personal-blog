import {
  FormControl,
  FormLabel,
  Input,
  Heading,
  Select,
  Textarea,
  Button,
  Flex,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useMutation } from 'react-query';
import { createPost } from '../../api/posts';

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
    },
    onError: data => {
      console.log(data);
    },
  });

  const onInputChange = e => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {};
  return (
    <FormControl as="form" mt="2em" mb="10em">
      <Heading size="lg" fontWeight="500" textAlign="center">
        Add New Post
      </Heading>

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
          type="button"
          size="lg"
          colorScheme="green"
          onClick={() => {
            mutatePost.mutate(post);
          }}
        >
          Submit
        </Button>
      </Flex>
    </FormControl>
  );
};

export default CreatePost;
