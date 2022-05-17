import { Box, Image } from '@chakra-ui/react';
const Banner = ({ src }) => {
  return (
    <Box width="100%">
      <Image src={src} width="100%" objectFit="cover" height="260px"></Image>
    </Box>
  );
};
export default Banner;
