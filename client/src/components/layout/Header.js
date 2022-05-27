import { Box, Heading } from '@chakra-ui/react';
import Banner from '../misc/Banner';
import MainNav from '../nav/MainNav';
const Header = ({ bannerImg, headingTxt }) => {
  return (
    <Box as="header">
      <Box m="1em">
        <Heading w="100%">{headingTxt}</Heading>
      </Box>
      <Banner src={bannerImg} />
      <MainNav />
    </Box>
  );
};

export default Header;
