import React from 'react';
import styled from 'styled-components';
import Calender from './Calander';
const CalenderWrap = () => {
  return (
    <CalenderStyleWrap>
      <Calender />
    </CalenderStyleWrap>
  );
};

const CalenderStyleWrap = styled.div`
  position: relative;
  top: -30px;
`;

export default CalenderWrap;
