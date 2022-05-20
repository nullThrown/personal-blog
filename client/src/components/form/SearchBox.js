import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  HStack,
} from '@chakra-ui/react';

const SearchBox = () => {
  return (
    <FormControl as="form" width="300px">
      <HStack>
        <FormLabel htmlFor="search"></FormLabel>
        <Input id="search" />
        <Button>Search</Button>
      </HStack>
    </FormControl>
  );
};
export default SearchBox;
