import React from 'react';
import { connect } from 'react-redux';
import {
  minusInfantGuest,
  plusInfantGuest,
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

const PeopleModal3 = ({ plusInfantGuest, infant, minusInfantGuest }) => {
  return (
    <div>
      <ModalBox>
        <ModalWrap>
          <TypeBox>
            <Subtitle>{'유아'}</Subtitle>
            <AgeRange>{'0~만 2세미만 '}</AgeRange>
            {/* <Subtitle>{props.types}</Subtitle>
            <AgeRange>{props.ages}</AgeRange> */}
          </TypeBox>
          <PeopleAmountBtn>
            <ChangeNo value={infant} onClick={() => minusInfantGuest(infant)}>
              -
            </ChangeNo>
            <PeopleNo>{infant}</PeopleNo>
            <ChangeNo onClick={() => plusInfantGuest(infant)}>+</ChangeNo>
          </PeopleAmountBtn>
        </ModalWrap>
      </ModalBox>
    </div>
  );
};
const mapStateToProps = ({ booking: { infant } }) => ({
  infant,
});

const mapDispatchToProps = dispatch => ({
  plusInfantGuest: infant => dispatch(plusInfantGuest(infant)),
  minusInfantGuest: infant => dispatch(minusInfantGuest(infant)),
});
export default connect(mapStateToProps, mapDispatchToProps)(PeopleModal3);
