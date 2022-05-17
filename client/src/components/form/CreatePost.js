import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Heading,
  Select,
  VStack,
  Textarea,
  Button,
  Flex,
} from '@chakra-ui/react';

const CreatePost = () => {
  return (
    <FormControl as="form" mt="2em" mb="10em">
      <Heading size="lg" fontWeight="500" textAlign="center">
        Add New Post
      </Heading>

      <FormLabel htmlFor="title">Title</FormLabel>
      <Input variant="flushed" id="title" w="50%" mb="2em" />
      <FormLabel htmlFor="category">Category</FormLabel>
      <Select variant="flushed" id="category" w="50%" mb="3em">
        <option value="misc">Misc</option>
        <option value="misc">philosophy</option>
        <option value="misc">sentamental</option>
      </Select>
      <Textarea
        height="800px"
        size="md"
        placeholder="Let the thoughts flow..."
      />
      <Flex justifyContent="center" mt="2em">
        <Button size="lg" colorScheme="green">
          Submit
        </Button>
      </Flex>
    </FormControl>
  );
};

export default CreatePost;
