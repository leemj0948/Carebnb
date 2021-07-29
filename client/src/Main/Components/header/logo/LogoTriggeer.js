import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Logo } from '../../../../assets/airbnb.svg';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { goBackHome } from '../../../../redux/header/header.action';

const LogoTriggeer = ({ goHome }) => {
  return (
    <LogoBox>
      <Link to="/">
        <LogoItself onClick={goHome} />
        <LogoText>airbnb</LogoText>
      </Link>
    </LogoBox>
  );
};

const mapDispatchToProps = dispatch => ({
  goHome: () => dispatch(goBackHome()),
});

export const LogoBox = styled.div`
  width: 120px;
  height: 70px;
  display: flex;
  flex-direction: row;
`;
export const LogoText = styled(Link)`
  font-size: 32px;
  padding: 0.2em;
  width: 70%;
  vertical-align: super;
`;
export const LogoItself = styled(Logo)`
  cursor: pointer;
  height: 50px;
  width: 30%;
  vertical-align: sub;
  padding-right: 0px;
`;

export default connect(null, mapDispatchToProps)(LogoTriggeer);
