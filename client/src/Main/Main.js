import React from 'react';
import BannerBox from './Components/banner/banner-box.components';
import CityList from './Components/cityList/CityList.components';
import Experience from './Components/experience/Experience.components';
import LiveAnyWhere from './Components/liveAnywhere/live-anyWhere.components.js';
import TopBanner from './Components/topbanner/top-banner.components';

import './Main.scss';
const Main = ({ UserInfoHidden, tooglePeopleModalExit }) => {
  // const [exit, useExit] = useState(false);
  // const clickOustise = () => {
  //   useExit(true);
  // };
  // exit = UserInfoHidden;

  // function clickOustise(UserInfoHidden) {
  //   useExit(true);
  //   UserInfoHidden = false;
  //   console.log('false');
  // }
  return (
    <div
      className="main-container"
      // onClick={() => {
      //   clickOustise();
      // }}
    >
      <TopBanner />
      <CityList />
      <LiveAnyWhere />
      <BannerBox
        imgUrl={'https://i.ibb.co/S3Xr1nt/hamburg-111970-1280.jpg'}
        desc={'WishList to exploring'}
        subtitle={'Natural Life'}
      />
      <Experience />
      <BannerBox
        imgUrl={'https://i.ibb.co/0yBMtd9/man-1718099-1280.jpg'}
        desc={
          'Earn extra income and unlock new opportunities by sharing your space.'
        }
        subtitle={'Try hosting'}
      />
    </div>
  );
};

// const mapStateToProps = ({ header: { UserInfoHidden } }) => ({
//   UserInfoHidden,
// });
// const mapDispatchToProps = dispatch => ({
//   // toggleUserDropDown: () => dispatch(toggleUserDropDown()),
//   tooglePeopleModalExit: () => dispatch(tooglePeopleModalExit()),
// });
export default Main;
