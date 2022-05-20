import { Link, Box, Flex } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
{
  // chakra routing react-router-dom integration
  /* <Link as={ReachLink} to="/home">
  Home
</Link>; */
}
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
      </Flex>
    </Box>
  );
};
export default MainNav;
