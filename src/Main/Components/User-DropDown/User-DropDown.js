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
          로그인
        </Linked>
        <Linked to="#">회원가입</Linked>
        <Line />
        <Text>숙소호스트되기</Text>
        <Text>체험호스팅하기</Text>
        <Text>도움말</Text>
      </UserItem>
    </UserDropDwonBox>
  );
};

const mapDispatchToProps = dispatch => ({
  onModal: () => dispatch(modalHandler()),
});

export default connect(null, mapDispatchToProps)(UserDropDown);
