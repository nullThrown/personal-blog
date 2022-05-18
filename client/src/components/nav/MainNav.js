import { Link, Box, Flex } from '@chakra-ui/react';
// import { Link as ReachLink } from '@reach/router';

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
          fontSize="lg"
          fontWeight="500"
          color="blue.900"
          textDecoration="none"
          to="/home"
        >
          Home
        </Link>
        <Link
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
