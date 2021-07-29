import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Login from '../Login/Login';
import BannerBox from './Components/banner/banner-box.components';
import CityList from './Components/cityList/CityList.components';
import Experience from './Components/experience/Experience.components';
import LiveAnyWhere from './Components/liveAnywhere/live-anyWhere.components.js';
import TopBanner from './Components/topbanner/top-banner.components';

import './Main.scss';
const Main = ({ modalhandle }) => {
  return (
    <MainContainer>
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
      {modalhandle && <Login />}
    </MainContainer>
  );
};

const MainContainer = styled.div`
  height: 360vh;
`;
const mapStateToProps = state => ({
  modalhandle: state.header.modalhandle,
});

export default connect(mapStateToProps, null)(Main);
