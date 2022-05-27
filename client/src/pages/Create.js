import MainContainer from '../components/base/MainContainer';
import CreatePost from '../components/form/CreatePost';
import Header from '../components/layout/Header';
import Banner from '../components/misc/Banner';
import MainNav from '../components/nav/MainNav';
const Create = () => {
  return (
    <MainContainer>
      <Header bannerImg="/img/country-inn.jpg" headingTxt="Dionysus" />
      <CreatePost />
    </MainContainer>
  );
};

export default Create;
