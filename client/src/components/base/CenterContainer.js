import { Flex } from '@chakra-ui/react';
const CenterContainer = ({ children }) => {
  return (
    <Flex w="100%" justifyContent="center" mt="10em">
      {children}
    </Flex>
  );
};

export default CenterContainer;
