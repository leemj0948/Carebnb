import React from 'react';
import { connect } from 'react-redux';
import { modalHandler } from '../../../redux/header/header.action';
import {
  UserDropDwonBox,
  Text,
  UserItem,
  Linked,
  Line,
} from './User-DropDown.style';
const UserDropDown = ({ onModal }) => {
  return (
    <UserDropDwonBox>
      <UserItem>
        <Linked to="#" onClick={onModal}>
          Log in
        </Linked>
        <Linked to="#" onClick={onModal}>
          Sign up
        </Linked>
        <Line />
        <Text>Host your home</Text>
        <Text>Host an experience</Text>
        <Text>Help</Text>
      </UserItem>
    </UserDropDwonBox>
  );
};

const mapDispatchToProps = dispatch => ({
  onModal: () => dispatch(modalHandler()),
});

export default connect(null, mapDispatchToProps)(UserDropDown);
