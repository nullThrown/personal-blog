import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
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
import { reAuthUser } from '../../api/auth';
const categories = [
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
];
const AccountInfo = () => {
  const [credentials, setCredentials] = useState({
    username: 'hades',
    password: '',
    confirmPassword: '',
  });
  const [newCategory, setNewCategory] = useState('');

  const [isEditLocked, setIsEditLocked] = useState(true);
  const [passwordUnlock, setPasswordUnlock] = useState('');

  const editUnlock = useMutation(passwordUnlock => reAuthUser(passwordUnlock), {
    onSuccess: data => {
      console.log(data);
      setIsEditLocked(false);
    },
    onError: error => {
      // console.log(error);
      console.log('the mutation is now in an error state');

      if (error.response.data.msg === 'invalid_credentials') {
        console.log('wrong passsword bozo');
      }
      if (error.response.data.msg === 'server_error') {
        console.log('server error dude');
      }
    },
  });
  const onInputChange = e => {
    switch (e.target.name) {
      case 'passwordUnlock':
        setPasswordUnlock(e.target.value);
        break;
      case 'username':
        setCredentials({ ...credentials, username: e.target.value });
        break;
      case 'password':
        setCredentials({ ...credentials, password: e.target.value });
        break;
      case 'confirmPassword':
        setCredentials({ ...credentials, confirmPassword: e.target.value });
        break;
      case 'category':
        setNewCategory(e.target.value);
        break;

      default:
        break;
    }
  };

  const handlePasswordUnlock = e => {
    e.preventDefault();
    editUnlock.mutate(passwordUnlock);
  };
  const handleCredentials = e => {
    e.preventDefault();
    editUnlock.mutate(passwordUnlock);
  };
  const handleNewCategory = e => {
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
        <FormLabel htmlFor="passwordUnlock">Password</FormLabel>
        <Flex>
          <Input
            type="password"
            name="passwordUnlock"
            id="passwordUnlock"
            placeholder="unlock edit..."
            onChange={e => setPasswordUnlock(e.target.value)}
          />
          <Button
            type="submit"
            onClick={handlePasswordUnlock}
            colorScheme="blue"
            ml=".5em"
            isLoading={editUnlock.isLoading}
          >
            Unlock
          </Button>
        </Flex>
        {isEditLocked ? (
          <Text>Edit is Locked</Text>
        ) : (
          <Text>Edit is free!!</Text>
        )}
        {editUnlock.isError && (
          <Text>the mutation is now in an error state</Text>
        )}
      </Box>
      <Flex alignItems="start" justifyContent="space-evenly" mb="10em">
        <Box p="2em" boxShadow="5px 5px 15px rgb(240,240,240)">
          <Text textAlign="center" fontSize="xl" fontWeight="400">
            Credentials
          </Text>
          <FormLabel htmlFor="username">Username</FormLabel>
          <Input
            id="username"
            name="username"
            value={credentials.username}
            isReadOnly={isEditLocked}
            onChange={onInputChange}
          />
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input
            type="password"
            id="password"
            name="password"
            value={credentials.password}
            isReadOnly={isEditLocked}
            onChange={onInputChange}
          />
          <FormLabel htmlFor="password">Confirm Password</FormLabel>
          <Input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={credentials.confirmPassword}
            isReadOnly={isEditLocked}
            onChange={onInputChange}
          />
        </Box>
        <Box p="2em" boxShadow="5px 5px 15px rgb(240,240,240)">
          <Text textAlign="center" fontSize="xl" fontWeight="400">
            Credentials
          </Text>
          <FormLabel htmlFor="category">New Category</FormLabel>
          <Input
            type="text"
            name="category"
            id="category"
            isReadOnly={isEditLocked}
            onChange={onInputChange}
          />
          {categories.map(cat => {
            return <Category key={cat.id} name={cat.name} id={cat.id} />;
          })}
        </Box>
      </Flex>
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
