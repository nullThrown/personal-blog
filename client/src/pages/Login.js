import {
  FormControl,
  FormLabel,
  Input,
  Heading,
  Button,
  Flex,
  Box,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { loginUser } from '../api/auth';
import storage from '../util/storage';
import ErrorMsg from '../components/typography/ErrorMsg';
export const Login = () => {
  const [user, setUser] = useState({
    username: '',
    password: '',
  });

  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleLogin = e => {
    e.preventDefault();
    const user = useQuery('user');
  };
  return (
    <Flex justify="center" height="100vh" mt="10em">
      <FormControl
        as="form"
        boxShadow="2px 2px 10px rgba(0,0,0, .2)"
        maxW="540px"
        width="96%"
        padding="2em 4em"
        alignSelf="start"
      >
        <Heading size="lg" fontWeight="400" textAlign="center" color="teal.900">
          Login
        </Heading>
        <FormLabel htmlFor="username" color="teal">
          Username
        </FormLabel>
        <Input
          id="username"
          type="text"
          name="username"
          onChange={onInputChange}
        />
        <FormLabel htmlFor="password" mt="1em" color="teal">
          Password
        </FormLabel>
        <Input
          id="password"
          type="password"
          name="password"
          onChange={onInputChange}
        />
        <Box mt=".5em">
          {/* is error?? */}
          <ErrorMsg msg="wrong credentials" />
        </Box>
        <Flex justifyContent="center" mt="1em">
          <Button
            type="submit"
            variant="outline"
            color="black"
            colorScheme="blackAlpha"
            isLoading={false}
            onSubmit={handleLogin}
          >
            Login
          </Button>
        </Flex>
      </FormControl>
    </Flex>
  );
};
export default Login;
