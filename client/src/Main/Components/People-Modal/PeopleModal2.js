import React from 'react';
import { connect } from 'react-redux';
import {
  minusChildGuest,
  plusChildGuest,
} from '../../../redux/booking/booking.action';
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

const PeopleModal2 = ({ plusChildGuest, guest, minusChildGuest }) => {
  return (
    <div>
      <ModalBox>
        <ModalWrap>
          <TypeBox>
            <Subtitle>{'어린이'}</Subtitle>
            <AgeRange>{'만 2~12세 이상'}</AgeRange>
          </TypeBox>
          <PeopleAmountBtn>
            <ChangeNo value={guest} onClick={() => minusChildGuest(guest)}>
              -
            </ChangeNo>
            <PeopleNo>{guest}</PeopleNo>
            <ChangeNo onClick={() => plusChildGuest(guest)}>+</ChangeNo>
          </PeopleAmountBtn>
        </ModalWrap>
      </ModalBox>
    </div>
  );
};
const mapStateToProps = ({ booking: { guest } }) => ({
  guest,
});

const mapDispatchToProps = dispatch => ({
  plusChildGuest: guest => dispatch(plusChildGuest(guest)),
  minusChildGuest: guest => dispatch(minusChildGuest(guest)),
});
export default connect(mapStateToProps, mapDispatchToProps)(PeopleModal2);
