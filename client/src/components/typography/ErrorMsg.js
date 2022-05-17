import { Text } from '@chakra-ui/react';
const ErrorMsg = ({ msg }) => {
  return (
    <Text fontSize="md" color="red.600">
      {msg}
    </Text>
  );
};
export default ErrorMsg;
