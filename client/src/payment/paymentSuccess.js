import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const PaymentSuccess = ({
  totalGuest,
  startDay,
  endDay,
  stayDate,
  totalprice,
  eachHotelValues,
}) => {
  console.log(eachHotelValues);

  const { city, address, title, fee } = eachHotelValues;

  return (
    <div style={{ paddingBottom: '5rem' }}>
      <Container>
        {/* <Confetti width={width} height={height} numberOfPieces={450} /> */}
        <Title>Booking is Confirmed!</Title>
        <Message>Here is your Booking details</Message>

        <div className="flex">
          <LeftConfrimBox>
            <p className="alignLeft">
              <span class="padding">{address},</span>
              <span>{city}</span>
            </p>
            {/* <p className="alignLeft"></p> */}
            {/* <p className="alignLeft"></p> */}
            <p className="alignLeft">{title}</p>
            <PdateWrap>
              <Pbox>
                <p className="bold">Check In </p>
                <p>{startDay}</p>
              </Pbox>
              <Pbox>
                <p className="bold">Check Out </p>
                <p>{endDay}</p>
              </Pbox>
            </PdateWrap>
            <Pbox>
              <p className="bold">Duration of Stay </p>
              <p>{stayDate}</p>
            </Pbox>
            <Pbox>
              <p className="bold"> Address </p>
              <p>{address}</p>
            </Pbox>
            <Pbox>
              <p className="bold">Guests</p>
              <p>{totalGuest} guest</p>
            </Pbox>
          </LeftConfrimBox>
          <RightConfrimBox>
            <p class="bold">Bills </p>
            <p class="fee">
              <span>
                ${fee} x {stayDate} days
              </span>
              <span> $ {totalprice}</span>
            </p>
            <p class="borderTop">
              <span>Total</span>
              <span>$ {totalprice}</span>
            </p>
            <p class="borderTop">
              <span>Payment</span>
              <span>$ {totalprice}</span>
            </p>
          </RightConfrimBox>
        </div>
      </Container>
    </div>
  );
};

const Container = styled.div`
  font-family: 'Open Sans Condensed';
  font-size: 1.3rem;
  width: 70%;
  margin: 30px auto 0 auto;
  text-align: center;
  padding: 2rem;
  .flex {
    display: flex;
    flex-direction: row;
  }
`;

const LeftConfrimBox = styled.div`
  width: 47%;
  padding: 1rem;
  margin: 0 0.5rem;
  border: 1px solid #dddddd;
  border-radius: 20px;
  .alignLeft {
    text-align: left;
    padding: 0.5rem 2rem;
    .padding {
      padding-right: 0.5rem;
    }
  }
`;
const RightConfrimBox = styled.div`
  width: 47%;
  padding: 1rem;
  margin: 0 0.5rem;
  border: 1px solid #dddddd;
  border-radius: 20px;
  .fee {
    padding-bottom: 4rem;
  }
  .bold {
    font-weight: bold;
  }
  .borderTop {
    border-top: 1px solid #dddddd;
  }
  p {
    padding: 1.5rem;
    display: flex;
    justify-content: space-between;
  }
`;
const Title = styled.div`
  font-size: 58px;
`;

const Message = styled.div`
  margin: 1.5rem;
`;

const Pbox = styled.div`
  display: flex;
  text-align: left;
  padding: 0.5rem 2rem;
  flex-direction: column;
  .bold {
    padding: 0.5rem 0;
    font-weight: bold;
  }
`;
const PdateWrap = styled.div`
  display: felx;
  flex-direction: row;
`;
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
export default connect(mapStateToProps)(PaymentSuccess);
