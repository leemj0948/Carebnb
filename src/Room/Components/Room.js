import React, { useState } from 'react';
import Calender from '../../Main/Components/Calander.components/Calander';
// import Calendar from '../../Main/Components/Calander.components/Calander';
import MapList from '../../assets/data/maplist';
import { DateRangePicker } from 'react-dates';
import Payment from '../../payment/Payment';
// import {
//   MdKitchen,
//   MdWifi,
//   MdTv,
//   MdLocalParking,
//   MdAcUnit,
//   MdPool,
// } from 'react-icons/md';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//   utensils,
//   wifi,
//   tv,
//   parking,
//   snowflake,
// } from '@fortawesome/free-solid-svg-icons';

import {
  Star,
  Img1,
  Img2,
  Img3,
  Img4,
  Grid,
  MainImg,
  BillBox,
  DetailBox,
  RoomType,
  Content,
  OneDesc,
  Title,
  Descprtion,
  Span,
  AdditionalFee,
  Subtitle,
  Section,
  Button,
  Line,
  Notice,
  StarContainer,
  Price,
  Share,
  Heart,
  Icons,
  Div,
} from './Room.styles.js';
import { connect } from 'react-redux';
import { useRef } from 'react';
import { useEffect } from 'react';
import {
  utensils,
  wifi,
  tv,
  parking,
  snowflake,
} from '@fortawesome/free-solid-svg-icons';
// import { calculateTotal } from '../../redux/booking/booking.utils';
import { getTotalValue } from '../../redux/booking/booking.action';
import GuestDropdown from './GuestDropdown';
import { Link } from 'react-router-dom';
let useClickOut = handler => {
  let domNode = useRef();

  // useEffect(() => {
  //   let maybeHandler = event => {
  //     console.log(domNode);
  //     if (!domNode.current.contains(event.target)) {
  //       handler();
  //     }
  //   };
  //   document.addEventListener('mousedown', maybeHandler);
  //   return () => {
  //     document.removeEventListener('mousedown', maybeHandler);
  //   };
  // });
  return domNode;
};

const Room = ({
  calTotal,
  match,
  location,
  totalGuest,
  setStart,
  setEnd,
  stayDate,
  totalprice,
  eachHotelValues,
}) => {
  const [focusedInput, setFocusedInput] = useState(null);
  useEffect(() => {
    calTotal();
  }, []);
  // console.log(eachHotelValues.fee);
  console.log(totalprice);
  console.log(typeof eachHotelValues.fee);
  console.log(typeof stayDate);
  // let { fee } = eachHotelValues;
  let [isOpen, setIsOpen] = useState(false);

  let domNode = useClickOut(() => {
    setIsOpen(false);
  });
  const matchId = match.params.id;

  const item = MapList.find(list => {
    return list.id == matchId;
  });
  // console.log(item.fee, stayDate);
  // let totalPriceValue = calTotal(item.fee, stayDate);
  // console.log(totalPriceValue);
  // console.log(item.amenities);
  // console.log(item.amenities[0].key);
  // console.log(item.amenities[0].key);
  // console.log(item.amenities[0].value);
  // console.log(item);
  // console.log(item.imgUrl[0]);
  let features = item.owner.feature;
  console.log(features);
  let pricePerDay = item.fee.toLocaleString('ko-KR');
  console.log(pricePerDay);
  return (
    <Content>
      <Title>{item.title}</Title>
      <OneDesc>
        <Div>
          <StarContainer>
            {' '}
            <Star />
          </StarContainer>
          <Span>{item.rating}</Span>
          <Span>{item.address}</Span>
        </Div>
        <p>
          <Share />
          <Icons>공유하기</Icons>
          <Heart />
          <Icons>저장</Icons>
        </p>
      </OneDesc>
      <Grid>
        <MainImg alt="img" src={item.imgUrl[0]} />
        <Img1 alt="img" src={item.imgUrl[1]} />
        <Img2 alt="img" src={item.imgUrl[2]} />
        <Img3 alt="img" src={item.imgUrl[3]} />
        <Img4 alt="img" src={item.imgUrl[0]} />
      </Grid>
      <Descprtion>
        <DetailBox>
          <Section>
            <Subtitle> Host by {item.owner.name}</Subtitle>
            <RoomType>{item.option1}</RoomType>
          </Section>
          <Section>
            <ul>
              {features.map(f => {
                return <li key={f.id}>{f}</li>;
              })}
            </ul>
          </Section>
          <Section>
            <Subtitle>{item.owner.name} 님의 숙소 정보</Subtitle>
            <div>{item.describe}</div>
          </Section>
          <Section>
            <Subtitle>제공내역</Subtitle>
            {/* console.log(item.i)
            {item.lcons.map(val => {
              return (
                <div>
                  <FontAwesomeIcon icon={val.icon} />
                  <span>{val.title}</span>
                </div>
              );
            })} */}
            {item.amenities.map(i => {
              return (
                <div>
                  {/* <i.key /> */}
                  {/* <FontAwesomeIcon icon={faCoffee} /> */}
                  {/* <FontAwesomeIcon icon={i.icon} /> */}
                  {/* <span>{i.icon}</span> */}
                  <li>{i.value}</li>
                  {/* <span>{i.value}</span> */}
                </div>
              );
            })}

            <div>{item.amenities.key}</div>
            <div>{item.amenities.value}</div>
          </Section>
        </DetailBox>
        <BillBox>
          <Line>
            <Price>₩{pricePerDay} </Price>/ 박
          </Line>
          <Line>
            <StarContainer>
              <Star />
            </StarContainer>
            <span>{item.rating}</span>
          </Line>
          <DateRangePicker
            // onDatesChange={setStart}
            focusedInput={focusedInput}
            onFocusChange={focusedInput => setFocusedInput(focusedInput)}
            startDateId="start_date_id"
            endDateId="end_date_id"
            // startDate="setStart"
            // endDate="setEnd"
            startDatePlaceholderText={setStart}
            endDatePlaceholderText={setEnd}
            customArrowIcon={true}
          />
          {/* <Calendar start={setStart} end={setEnd} /> */}
          <GuestDropdown />
          {/* <div ref={domNode}>
            <button onClick={() => setIsOpen(isOpen => !isOpen)}>
              {' '}
              <label>Guest </label>
              <input value={totalGuest} />
            </button> */}

          {/* <PeopleModalContainer /> */}
          {/* </div> */}
          <Link to={`/paymentDetail`}>
            <Button>예약하기 </Button>
          </Link>
          <Notice>예약 확정 전에는 요금이 청구되지 않습니다</Notice>
          <AdditionalFee>
            <span>
              ₩ {pricePerDay} x {stayDate} 박
            </span>
          </AdditionalFee>
          {/* <AdditionalFee>
            <span>청소비</span>
            <span>₩24,000</span>
          </AdditionalFee>
          <AdditionalFee>
            <span>서비스수수료</span>
            <span>₩9,300</span>
          </AdditionalFee>
          <AdditionalFee id="paddingB">
            <span>숙박세와수수료</span>
            <span>₩930</span>
          </AdditionalFee> */}
          <AdditionalFee className="totalStyle">
            <span>합계</span>
            <span>₩ {totalprice.toLocaleString('ko-KR')}</span>
          </AdditionalFee>
        </BillBox>
      </Descprtion>
    </Content>
  );
};
const mapStateToProps = ({
  booking: {
    guest,
    adult,
    infant,
    startDay,
    endDay,
    stayDate,
    totalprice,
    eachHotelValues,
  },
}) => ({
  totalGuest: guest + adult + infant,
  setStart: startDay,
  setEnd: endDay,
  stayDate: stayDate,
  totalprice,
  eachHotelValues,
});

const mapDispatchToProps = dispatch => ({
  calTotal: () => dispatch(getTotalValue()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Room);
