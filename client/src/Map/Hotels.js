import React from 'react';
import styled from 'styled-components';
import Fliter from './Component/Filter';
import calendar from '../assets/calendar.svg';
import HotelInfo from './Component/HotelInfo';
import MapList from '../assets/data/maplist';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getEachHotelData } from '../redux/booking/booking.action';
const Hotels = ({ totalGuest, startDay, endDay, sentHotelData }) => {
  return (
    <Backgorund>
      <OptionInfo>
        300+ stays · {startDay} - {endDay} · {totalGuest} guest
      </OptionInfo>
      <Title>Stay in </Title>
      <Filters>
        <Fliter name={filterName} />
      </Filters>
      <SmallInfo>
        <Info>
          <Calendar src={calendar} />
          <Bold>Book soon.</Bold> 28% of places in New York for your dates are
          already booked on Carebnb.
        </Info>
      </SmallInfo>
      <InfoSection to="/room">
        {MapList.map(elm => {
          return (
            <Link to={`/room/${elm.id}`} onClick={() => sentHotelData(elm)}>
              <HotelInfo data={elm} />
            </Link>
          );
        })}
      </InfoSection>
    </Backgorund>
  );
};
const filterName = [
  'Cancellation flexibility',
  'Type of place',
  'Price',
  'Instant Book',
  'More filters',
];

const Backgorund = styled.div`
  overflow-y: scroll;
  width: 93%;
  height: 84vh;
  padding: 20px 30px;
`;
const OptionInfo = styled.h1`
  color: inherit;
  font-size: 1.2vw;
  font-weight: 400;
  line-height: inherit;
  margin: 0px;
  padding: 0px;
`;
const Title = styled.h1`
  padding: 15px 0;
  color: inherit;
  font-size: 2.2rem;
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
  font-size: 1.22rem;
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
const mapStateToProps = ({
  booking: { startDay, endDay, guest, adult, infant },
}) => ({
  totalGuest: guest + adult + infant,
  startDay,
  endDay,
});

const mapDispatchToProps = dispatch => ({
  sentHotelData: elm => dispatch(getEachHotelData(elm)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Hotels);
