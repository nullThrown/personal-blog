import MainContainer from '../components/base/MainContainer';
import AccountInfo from '../components/layout/AccountInfo';
import Header from '../components/layout/Header';

const Account = () => {
  return (
    <MainContainer>
      <Header bannerImg="/img/neon-garage.jpg" />
      <AccountInfo />
    </MainContainer>
  );
};

export default Account;
