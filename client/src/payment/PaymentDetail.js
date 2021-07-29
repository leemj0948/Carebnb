import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { MdKeyboardArrowLeft } from 'react-icons/md';
import {
  PaymentWrap,
  Left,
  Right,
  PamentBody,
  PamentHeader,
} from './PaymentDetail.style';
import CheckoutForm from './CheckoutForm';
import CheckoutFormWrap from './CheckoutFormWrap';
import { useHistory } from 'react-router-dom';

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return null;
}

const PaymentDetail = ({
  totalGuest,
  startDay,
  endDay,
  stayDate,
  totalprice,
  eachHotelValues,
}) => {
  let history = useHistory();
  const { id, address, rating, fee, title, imgUrl, option1 } = eachHotelValues;
  const thumb = imgUrl[0];
  return (
    <PaymentWrap>
      <ScrollToTopOnMount />
      <PamentHeader
        className="icon"
        onClick={() => history.push(`/room/${id}`)}
      >
        <MdKeyboardArrowLeft className="arrow" />
        <h1>Confirm and pay</h1>
      </PamentHeader>
      <PamentBody>
        <Left>
          <h1>Your Trip</h1>
          <div>
            <p className="bold">Dates</p>
            <p>
              {startDay} - {endDay}
            </p>
          </div>
          <div>
            <p className="bold">Check-in-time</p>
            <p>03:00pm-08:00pm</p>
          </div>
          <div>
            <p className="bold">Guests</p>
            <p>{totalGuest} guest</p>
          </div>
          <CheckoutFormWrap>
            <CheckoutForm
              price={totalprice}
              onSuccessfulCheckout={() => history.push('/MyTravelInfo')}
            />
          </CheckoutFormWrap>
        </Left>
        <Right>
          <div className="flex-row">
            <img src={thumb} alt="" />

            <div className="summary">
              <p>{address}</p>
              <p>{title}</p>
              <p>{option1}</p>
              <p className="bold">{rating}</p>
            </div>
          </div>
          <div className="total">
            <h1>Price details</h1>
            <p className="space-around">
              <span>
                ${fee.toLocaleString('ko-KR')} x {stayDate} night
              </span>
              <span>${totalprice.toLocaleString('ko-KR')}</span>
            </p>
            <p></p>
            <p className="space-around">
              <span className="bold">Total</span>
              <span>${totalprice.toLocaleString('ko-KR')}</span>
            </p>
          </div>
        </Right>
      </PamentBody>
    </PaymentWrap>
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
  startDay,
  endDay,
  stayDate,
  totalprice,
  eachHotelValues,
});
export default connect(mapStateToProps, null)(PaymentDetail);
