import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  input,
  Input,
  VStack,
  Box,
  Text,
  Button,
  HStack,
  Flex,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useMutation } from 'react-query';
import axios from '../../config/axios';
import { reAuthUser } from '../../api/auth';

const AccountInfo = () => {
  const [user, setUser] = useState({
    username: 'hades',
    categories: [
      {
        name: 'sex',
        id: '3432',
      },
      {
        name: 'drugs',
        id: '3233324',
      },
      {
        name: 'rock & roll',
        id: '5678',
      },
    ],
    password: '',
  });

  const [isEditLocked, setIsEditLocked] = useState(true);
  const [passwordUnlock, setPasswordUnlock] = useState('');
  const editUnlock = useMutation(passwordUnlock => reAuthUser(passwordUnlock), {
    onSuccess: data => {
      console.log(data);
      setIsEditLocked(false);
    },
    onError: error => {
      console.log(error);
      if (error.response.data.msg === 'invalid_credentials') {
        console.log('wrong passsword bozo');
      }
      if (error.responses.data.msg === 'server_error') {
        console.log('server error dude');
      }

      // set error msg component to display error
      // should only be two types : wrong password || server error
    },
  });
  const onInputChange = () => {};
  const handlePasswordUnlock = e => {
    e.preventDefault();
    editUnlock.mutate(passwordUnlock);
  };
  return (
    <FormControl as="form" mt="2em">
      <Box m="2.4em auto 4em" maxW="340px">
        <Text mb="1.6em">
          You will not be able to edit your username, change your password, or
          add new categories until you enter your password below.
        </Text>
        <FormLabel htmlFor="password-unlock">Password</FormLabel>
        <Flex>
          <Input
            type="password"
            name="passwordUnlock"
            id="password-unlock"
            placeholder="unlock edit..."
            onChange={e => setPasswordUnlock(e.target.value)}
          />
          <Button
            type="submit"
            onClick={handlePasswordUnlock}
            colorScheme="blue"
            ml=".5em"
          >
            Unlock
          </Button>
        </Flex>
        {isEditLocked ? (
          <Text>Edit is Locked</Text>
        ) : (
          <Text>Edit is free!!</Text>
        )}
      </Box>
      <VStack alignItems="left" spacing="32px" maxW="340px">
        <Box>
          <FormLabel htmlFor="username">Username</FormLabel>
          <Input
            id="username"
            name="username"
            value={user.username}
            onChange={onInputChange}
          />
        </Box>
        <Box>
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input
            type="password"
            id="password"
            name="password"
            value={user.password}
            onChange={onInputChange}
          />
        </Box>
        <Box mt="10em">
          <FormLabel htmlFor="category"></FormLabel>
          <Input type="" />
          {user.categories.map(cat => {
            return <Category key={cat.id} name={cat.name} id={cat.id} />;
          })}
        </Box>
      </VStack>
    </FormControl>
  );
};

function Category({ name }) {
  return (
    <Box boxShadow="5px 5px 10px rgb(236,236,236)" p=".6em">
      <Text fontWeight="500" fontSize="lg">
        {name}
      </Text>
    </Box>
  );
}

export default AccountInfo;
