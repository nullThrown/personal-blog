import { MainContainer } from '../components/base/MainContainer';
import CreatePost from '../components/form/CreatePost';
import Banner from '../components/misc/Banner';
import MainNav from '../components/nav/MainNav';
const Create = () => {
  return (
    <MainContainer>
      <Banner src="/img/the-meeting.jpg" />
      <MainNav />
      <CreatePost />
    </MainContainer>
  );
};

export default Create;
