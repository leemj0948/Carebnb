import React from 'react';
import {
  UserDropDwonBox,
  Text,
  UserItem,
  Linked,
  Line,
} from './User-DropDown.style';
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
      </UserItem>
    </UserDropDwonBox>
  );
};

export default UserDropDown;
