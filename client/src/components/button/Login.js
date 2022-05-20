import { Button } from '@chakra-ui/react';
import { Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
const Login = () => {
  return (
    <Link as={RouterLink} to="/login">
      <Button colorScheme="blue" variant="solid">
        Login
      </Button>
    </Link>
  );
};

export default Login;
