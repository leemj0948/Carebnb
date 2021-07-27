import React from 'react';
import { connect } from 'react-redux';
import { tooglePeopleModalHidden } from '../../../redux/booking/booking.action';

const PeopleModalTrigger = ({ totalGuest, togglePeopleModalHidden }) => {
  return (
    <div onClick={togglePeopleModalHidden}>
      <div>guest</div>
      <div placeholder="guest">
        {totalGuest ? `${totalGuest} guests   ` : 'Add guest'}
      </div>
    </div>
  );
};
const mapDispatchToProps = dispatch => ({
  togglePeopleModalHidden: () => dispatch(tooglePeopleModalHidden()),
});

const mapStateToProps = ({ booking: { guest, adult, infant } }) => ({
  totalGuest: guest + adult + infant,
});
export default connect(mapStateToProps, mapDispatchToProps)(PeopleModalTrigger);
