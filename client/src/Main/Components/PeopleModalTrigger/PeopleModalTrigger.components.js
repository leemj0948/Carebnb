import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { tooglePeopleModalHidden } from '../../../redux/booking/booking.action';

const PeopleModalTrigger = ({ totalGuest, togglePeopleModalHidden }) => {
  return (
    <GuestLabel onClick={togglePeopleModalHidden}>
      <div>Guests</div>
      <div className="placeholder" placeholder="Add guests">
        {totalGuest ? `  ${totalGuest} guest ` : 'Add guests'}
      </div>
    </GuestLabel>
  );
};

const GuestLabel = styled.div`
  font-size: 1.2rem;
  .placeholder {
    font-size: 1.1rem;
    color: #767171;
  }
`;
const mapDispatchToProps = dispatch => ({
  togglePeopleModalHidden: () => dispatch(tooglePeopleModalHidden()),
});

const mapStateToProps = ({ booking: { guest, adult, infant } }) => ({
  totalGuest: guest + adult + infant,
});
export default connect(mapStateToProps, mapDispatchToProps)(PeopleModalTrigger);
