import React from 'react';
import { connect } from 'react-redux';
import { toggleUserDropDown } from '../../../redux/header/header.action';
import {
  ButtonWrap,
  IconWrap,
  LeftHamIcon,
  LeftAvataIcon,
} from './user-icon.styles';
const UserIcon = ({ toggleUserDropDown }) => {
  return (
    <ButtonWrap onClick={toggleUserDropDown}>
      <IconWrap top={'8%'}>
        <LeftHamIcon />
      </IconWrap>
      <IconWrap>
        <LeftAvataIcon size={'35px'} />
      </IconWrap>
    </ButtonWrap>
  );
};
const mapDispatchToProps = dispatch => ({
  toggleUserDropDown: () => dispatch(toggleUserDropDown()),
});

export default connect(null, mapDispatchToProps)(UserIcon);
