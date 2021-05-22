import React, { useEffect } from 'react';
import styled from 'styled-components';
import Fliter from './Component/Filter';
import calendar from '../assets/calendar.svg';
import HotelInfo from './Component/HotelInfo';
import MapList from '../assets/data/maplist';

const Hotels = props => {
  return (
    <Backgorund>
      <OptionInfo>
        300개 이상의 숙소 · 6월 1일 - 6월 10일 · 게스트 2명
      </OptionInfo>
      <Title>지도에서 선택한 지역의 숙소</Title>
      <Filters>
        <Fliter name={filterName} />
      </Filters>
      <SmallInfo>
        <Info>
          <Calendar src={calendar} />
          <Bold>예약을 서두르세요.</Bold> 여행하시려는 날짜에는 서울 숙소의
          26%가 이미 예약되었습니다.
        </Info>
      </SmallInfo>
      <InfoSection>
        {MapList.map(elm => {
          console.log(elm);
          return <HotelInfo data={elm} />;
        })}
      </InfoSection>
    </Backgorund>
  );
};
const filterName = [
  '유연한 환불 정책',
  '숙소 유형',
  '요금',
  '즉시 예약',
  '필터 추가하기',
];

const Backgorund = styled.div`
  overflow-y: scroll;
  width: 93%;
  height: 500px;
  padding: 20px 30px;
`;
const OptionInfo = styled.h1`
  color: inherit;
  font-size: 0.9vw;
  font-weight: 400;
  line-height: inherit;
  margin: 0px;
  padding: 0px;
`;
const Title = styled.h1`
  padding: 15px 0;
  color: inherit;
  font-size: 2vw;
  font-weight: bolder;
  line-height: inherit;
  margin: 0px;
`;
const Filters = styled.div`
  ${({ theme }) => theme.flexSet('flex-start', 'center')}
  margin-top: 10px;
  width: 100%;
`;

const SmallInfo = styled.div`
  position: relative;
  width: 100%;
  height: 3vw;
  padding: 40px 0 40px 30px;
`;
const Info = styled.span`
  position: relative;
  font-size: 1em;
`;
const Bold = styled.span`
  font-weight: bold;
`;
const Calendar = styled.img`
  position: absolute;
  top: -3px;
  left: -34px;
  width: 1.5vw;
  margin: 2px;
`;
const InfoSection = styled.div`
  width: 100%;
`;

export default Hotels;
