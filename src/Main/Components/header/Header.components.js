import React, { useEffect, useState } from 'react';
import { tooglePeopleModalHidden } from '../../../redux/booking/booking.action';
import PeopleModalContainer from '../people-modal-container/PeopleModalContainer';
// import { throttle } from 'lodash';
import _ from 'lodash';
import UserIcon from '../user-icon/user-icon';
import 'react-calendar/dist/Calendar.css';
import { connect } from 'react-redux';
import UserDropDown from '../User-DropDown/User-DropDown';
import Calender from '../Calander.components/Calander';
import PeopleModalTrigger from '../PeopleModalTrigger/PeopleModalTrigger.components';
// import CalendarContainer from '../Calendar.container/Calendar.container.components';

// import PeopleModalContainer from '../people-modal-container/PeopleModalContainer';
// import PeopleModal from '../People-Modal/PeopleModal';
// import './header.components.scss';

import {
  Icon,
  Vline,
  MagnificationIcon,
  CalendarStyle,
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
import { headerSize } from '../../../redux/header/header.action';
const Header = ({ hidden, headerSize, bigHeader, UserInfoHidden }) => {
  useEffect(() => {
    window.addEventListener(
      'scroll',
      _.throttle(() => headerSize(window.pageYOffset), 100)
    );
  }, []);

  return (
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
      <LogoContainer to="/">
        <LogoItself />
        <LogoText>airbnb</LogoText>
      </LogoContainer>

      <MiddleBox>
        {/* {showMid && */}
        {bigHeader ? (
          <ButtonContainer>
            <MiddleButton>숙소</MiddleButton>
            <MiddleButton>체험</MiddleButton>
            <MiddleButton>온라인체험</MiddleButton>
          </ButtonContainer>
        ) : null}

        <SearchContainer sizeValue={bigHeader}>
          <SearchBox sizeValue={bigHeader}>
            <Subtitle>위치</Subtitle>
            <Search where="어디로가세요" />
          </SearchBox>
          {bigHeader ? <Vline></Vline> : null}

          <SearchBox sizeValue={bigHeader}>
            <Subtitle>체크인</Subtitle>
            {/* <Search type="date" where="날짜입력" /> */}
            <CalendarStyle />
          </SearchBox>
          {bigHeader ? <Vline></Vline> : null}
          <SearchBox sizeValue={bigHeader}>
            <Subtitle>체크아웃</Subtitle>
            {/* <Search type="date" where="날짜입력" /> */}
            <Calender />
          </SearchBox>
          {bigHeader ? <Vline></Vline> : null}

          {bigHeader ? (
            <SearchBox sizeValue={bigHeader}>
              <Icon flex="flex" row="row">
                <Option>
                  <PeopleModalTrigger />
                  {hidden ? null : <PeopleModalContainer />}
                </Option>

                <SearchIcon value={hidden}>
                  <LinkBox to="/map">
                    <MagnificationIcon />
                    {hidden ? null : <HiddenSpan>검색</HiddenSpan>}
                  </LinkBox>
                </SearchIcon>
              </Icon>
            </SearchBox>
          ) : (
            <SmallSearchBox animation={bigHeader}>
              <Subtitle padding={'55%'}>검색 시작하기</Subtitle>
              <SearchIcon value={hidden}>
                <LinkBox to="/map">
                  <MagnificationIcon />
                  {hidden ? null : <HiddenSpan>검색</HiddenSpan>}
                </LinkBox>
              </SearchIcon>
            </SmallSearchBox>
          )}
        </SearchContainer>
      </MiddleBox>
      {/* <CalendarContainer /> */}
      <OptionContainer>
        <Hostbtn>호스트되기</Hostbtn>
        <UserIcon />
        {UserInfoHidden ? null : <UserDropDown />}
      </OptionContainer>
    </HeaderContainer>
  );
};

const mapStateToProps = ({
  booking: { hidden },
  header: { bigHeader, UserInfoHidden },
}) => ({
  hidden,
  bigHeader,
  UserInfoHidden,
});
const mapDispatchToProps = dispatch => ({
  headerSize: locationY => dispatch(headerSize(locationY)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);