import React from 'react';
<<<<<<< HEAD
=======
import { connect } from 'react-redux';
import { modalHandler } from '../../../redux/header/header.action';
>>>>>>> 725c70ba... Almost Done, Stripe, paysuccessPage, header layout
import {
  UserDropDwonBox,
  Text,
  UserItem,
  Linked,
  Line,
} from './User-DropDown.style';
<<<<<<< HEAD
const UserDropDown = () => {
  return (
    <UserDropDwonBox>
      <UserItem>
        <Linked to="/login">로그인</Linked>
        <Linked to="/login">회원가입</Linked>
        <Line />
        <Text>숙소호스트되기</Text>
        <Text>체험호스팅하기</Text>
        <Text>도움말</Text>
=======
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
>>>>>>> 725c70ba... Almost Done, Stripe, paysuccessPage, header layout
      </UserItem>
    </UserDropDwonBox>
  );
};

<<<<<<< HEAD
export default UserDropDown;
=======
const mapDispatchToProps = dispatch => ({
  onModal: () => dispatch(modalHandler()),
});

export default connect(null, mapDispatchToProps)(UserDropDown);
>>>>>>> 725c70ba... Almost Done, Stripe, paysuccessPage, header layout
