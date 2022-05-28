import { Box, Heading, Flex, Icon, Link } from '@chakra-ui/react';
import { BsPersonBoundingBox } from 'react-icons/bs';
import { Link as RouterLink } from 'react-router-dom';
import Banner from '../misc/Banner';
import MainNav from '../nav/MainNav';
const Header = ({ bannerImg, headingTxt }) => {
  return (
    <Box as="header">
      <Flex alignItems="end" m="0 auto 1em" width="98%">
        <Heading w="100%">{headingTxt}</Heading>
        <Link as={RouterLink} to="/account">
          <Icon as={BsPersonBoundingBox} boxSize="28px" color="blue.800"></Icon>
        </Link>
      </Flex>
      <Banner src={bannerImg} />
      <MainNav />
    </Box>
  );
};

export default Header;
