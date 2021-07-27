import React from 'react';
import { connect } from 'react-redux';
import {
  minusAdultGuest,
  plusAdultGuest,
} from '../../../redux/booking/booking.action';
// import bookingReducer from '../../../redux/booking/booking.reducer';
import {
  AgeRange,
  ChangeNo,
  ModalBox,
  ModalWrap,
  PeopleAmountBtn,
  PeopleNo,
  Subtitle,
  TypeBox,
} from './PeopleModal.styles';

const PeopleModal = ({ plusAdultGuest, adult, minusAdultGuest }) => {
  // console.log(guest);
  // const [value, setValue] = useState(0);
  // const [colorBoarder, setColorBoarder] = useState('#c0c0c0');
  // function colorChange() {
  //   return setColorBoarder(value == 0 ? '#c0c0c0' : 'red');
  // }
  return (
    <div>
      <ModalBox>
        <ModalWrap>
          <TypeBox>
            <Subtitle>{'성인'}</Subtitle>
            <AgeRange>{'만 13세 이상'}</AgeRange>
          </TypeBox>
          <PeopleAmountBtn>
            <ChangeNo value={adult} onClick={() => minusAdultGuest(adult)}>
              -
            </ChangeNo>
            <PeopleNo>{adult}</PeopleNo>
            <ChangeNo onClick={() => plusAdultGuest(adult)}>+</ChangeNo>
          </PeopleAmountBtn>
        </ModalWrap>
      </ModalBox>
    </div>
  );
};
const mapStateToProps = ({ booking: { adult } }) => ({
  adult,
});
// const mapStateToProps = state => ({
//   guest: state.bookingReducer.guest,
// });

const mapDispatchToProps = dispatch => ({
  plusAdultGuest: adult => dispatch(plusAdultGuest(adult)),
  minusAdultGuest: adult => dispatch(minusAdultGuest(adult)),
});
export default connect(mapStateToProps, mapDispatchToProps)(PeopleModal);
