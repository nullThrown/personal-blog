import { Link, Box, Flex, Center } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import Logout from '../button/Logout';

export const MainNav = () => {
  return (
    <Box
      width="100%"
      m="1em 0"
      borderRadius="2px"
      p="1em 2em"
      bg="rgb(235, 249, 252)"
    >
      <Flex as="nav">
        <Center>
          <Link
            as={RouterLink}
            fontSize="lg"
            fontWeight="500"
            color="blue.900"
            textDecoration="none"
            to="/"
          >
            Home
          </Link>
        </Center>
        <Center>
          <Link
            as={RouterLink}
            ml=".6em"
            fontSize="lg"
            fontWeight="500"
            color="blue.900"
            to="/create"
          >
            Create
          </Link>
        </Center>
        <Box ml="auto">
          <Logout />
        </Box>
      </Flex>
    </Box>
  );
};
export default MainNav;
