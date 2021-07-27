import React, { useEffect, useState } from 'react';
// import { tooglePeopleModalHidden } from '../../../redux/booking/booking.action';
import PeopleModalContainer from '../people-modal-container/PeopleModalContainer';
// import { throttle } from 'lodash';
import _ from 'lodash';
import UserIcon from '../user-icon/user-icon';
import 'react-calendar/dist/Calendar.css';
import { connect } from 'react-redux';
import CalenderWrap from '../Calander.components/CalenderWrap';
import UserDropDown from '../User-DropDown/User-DropDown';
// import Calender from '../Calander.components/Calander';
import PeopleModalTrigger from '../PeopleModalTrigger/PeopleModalTrigger.components';
// import CalendarContainer from '../Calendar.container/Calendar.container.components';

// import PeopleModalContainer from '../people-modal-container/PeopleModalContainer';
// import PeopleModal from '../People-Modal/PeopleModal';
// import './header.components.scss';

import {
  HeaderContainerOthers,
  CheckInOut,
  Icon,
  Vline,
  MagnificationIcon,
  // CalendarStyle,
  MiddleBox,
  LinkBox,
  Hostbtn,
  OptionContainer,
  SearchIcon,
  Subtitle,
  HiddenSpan,
  Search,
  SearchContainer,
  MiddleButton,
  SearchBox,
  LogoText,
  Option,
  ButtonContainer,
  LogoContainer,
  HeaderContainer,
  LogoItself,
  SmallSearchBox,
} from './header.styles';
import { headerSize, mainpage } from '../../../redux/header/header.action';
const Header = ({
  hidden,
  mainPageHeader,
  headerSize,
  bigHeader,
  UserInfoHidden,
  searchButtonHeaderToggle,
}) => {
  const [listingPage, setListingPage] = useState(true);
  useEffect(() => {
    window.addEventListener(
      'scroll',
      _.throttle(() => headerSize(window.pageYOffset), 100)
    );
  }, [headerSize]);

  return (
    <div>
      {mainPageHeader ? (
        <HeaderContainer
          background={bigHeader ? 'transparent' : 'white'}
          topPosition={bigHeader ? '0' : '-10px'}
          positionStyle={bigHeader ? 'absolute' : 'fixed'}
          shadowStyle={
            bigHeader
              ? 'none'
              : `rgb(50 50 93 / 25%) 0px 6px 20px 0px, rgb(0 0 0 / 30%) 0px 3px 7px -3px`
          }
        >
          <LogoContainer to="/" onClick={searchButtonHeaderToggle}>
            <LogoItself />
            <LogoText>airbnb</LogoText>
          </LogoContainer>

          <MiddleBox>
            {/* {showMid && */}
            {bigHeader ? (
              <ButtonContainer>
                <MiddleButton>Place to stay</MiddleButton>
                <MiddleButton>Expereience</MiddleButton>
                <MiddleButton>Online Expereience</MiddleButton>
              </ButtonContainer>
            ) : null}

            <SearchContainer sizeValue={bigHeader}>
              <SearchBox sizeValue={bigHeader}>
                <Subtitle>Location</Subtitle>
                <Search
                  where="Location"
                  onChange={e => {
                    localStorage.setItem('location', e.target.value);
                  }}
                />
              </SearchBox>
              {bigHeader ? <Vline></Vline> : null}
              <div>
                <CheckInOut>
                  <SearchBox sizeValue={bigHeader}>
                    <Subtitle>Check in</Subtitle>
                  </SearchBox>
                  {bigHeader ? <Vline></Vline> : null}
                  <SearchBox sizeValue={bigHeader}>
                    <Subtitle>Check out</Subtitle>
                  </SearchBox>
                </CheckInOut>
                {bigHeader ? <CalenderWrap /> : null}
              </div>
              {bigHeader ? <Vline></Vline> : null}

              {bigHeader ? (
                //큰화면
                <SearchBox sizeValue={bigHeader}>
                  <Icon flex="flex" row="row">
                    <Option>
                      <PeopleModalTrigger />
                      {hidden ? null : <PeopleModalContainer />}
                    </Option>

                    <SearchIcon value={hidden}>
                      <LinkBox to="/map">
                        <MagnificationIcon
                          onClick={searchButtonHeaderToggle}
                          // onClick={() => {
                          //   searchButtonHeaderToggle
                          //   console.log(listingPage);
                          //   setListingPage(false);
                          // }}
                        />
                        {hidden ? null : <HiddenSpan>검색</HiddenSpan>}
                      </LinkBox>
                    </SearchIcon>
                  </Icon>
                </SearchBox>
              ) : (
                //스크롤 내리는 경우
                <SmallSearchBox animation={bigHeader}>
                  <Subtitle padding={'55%'}>
                    {' '}
                    {listingPage
                      ? 'Start your serach'
                      : localStorage.getItem('location')}
                  </Subtitle>
                  <SearchIcon value={hidden}>
                    <LinkBox to="/map">
                      <MagnificationIcon />
                      {hidden ? null : <HiddenSpan>Search</HiddenSpan>}
                    </LinkBox>
                  </SearchIcon>
                </SmallSearchBox>
              )}
            </SearchContainer>
          </MiddleBox>
          {/* <CalendarContainer /> */}
          <OptionContainer>
            <Hostbtn>Become a host</Hostbtn>
            <UserIcon />
            {UserInfoHidden ? null : <UserDropDown />}
          </OptionContainer>
        </HeaderContainer>
      ) : (
        <HeaderContainerOthers>
          <LogoContainer to="/">
            <LogoItself />
            <LogoText>airbnb</LogoText>
          </LogoContainer>
          <MiddleBox>
            <SearchContainer>
              <SmallSearchBox animation={bigHeader}>
                <Subtitle padding={'55%'} lineHeight={'2rem'}>
                  {' '}
                  {listingPage
                    ? 'Start your serach'
                    : localStorage.getItem('location')}
                </Subtitle>
                <SearchIcon value={hidden}>
                  <LinkBox to="/map">
                    <MagnificationIcon />
                    {hidden ? null : <HiddenSpan>Search</HiddenSpan>}
                  </LinkBox>
                </SearchIcon>
              </SmallSearchBox>
            </SearchContainer>{' '}
          </MiddleBox>
          <OptionContainer>
            <Hostbtn>Become a host</Hostbtn>
            <UserIcon />
            {UserInfoHidden ? null : <UserDropDown />}
          </OptionContainer>
        </HeaderContainerOthers>
      )}
    </div>
  );
};

const mapStateToProps = ({
  booking: { hidden },
  header: { mainPageHeader, bigHeader, UserInfoHidden },
}) => ({
  hidden,
  mainPageHeader,
  bigHeader,
  UserInfoHidden,
});
const mapDispatchToProps = dispatch => ({
  headerSize: locationY => dispatch(headerSize(locationY)),
  searchButtonHeaderToggle: () => dispatch(mainpage()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
