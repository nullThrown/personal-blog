import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Heading,
  Button,
  Flex,
  Box,
} from '@chakra-ui/react';
import ErrorMsg from '../components/typography/ErrorMsg';
export const Login = () => {
  return (
    <FormControl
      as="form"
      boxShadow="2px 2px 10px rgba(0,0,0, .2)"
      maxW="540px"
      width="96%"
      padding="2em 4em"
    >
      <Heading size="lg" fontWeight="400" textAlign="center" color="teal.900">
        Login
      </Heading>
      <FormLabel htmlFor="username" color="teal">
        Username
      </FormLabel>
      <Input id="username" type="text" />
      <FormLabel htmlFor="password" mt="1em" color="teal">
        Password
      </FormLabel>
      <Input id="password" type="password" />
      <Box mt=".5em">
        <ErrorMsg msg="wrong credentials" />
      </Box>
      <Flex justifyContent="center" mt="1em">
        <Button
          type="submit"
          variant="outline"
          color="black"
          colorScheme="blackAlpha"
          isLoading={false}
        >
          Login
        </Button>
      </Flex>
    </FormControl>
  );
};
export default Login;
