import React from 'react';
import PeopleModal from '../People-Modal/PeopleModal';
import styled from 'styled-components';
import PeopleModal2 from '../People-Modal/PeopleModal2';
import PeopleModal3 from '../People-Modal/PeopleModal3';
const PeopleModalContainer = () => {
  return (
    <PeopleModalContainerDiv>
      <PeopleModal id="1" />
      <PeopleModal2 id="2" />
      <PeopleModal3 id="3" />
      {/* <PeopleModal id="2" types={'어린이'} ages={'만 2~12세 이상'} /> */}
      {/* <PeopleModal id="3" types={'유아'} ages={'0~만 2세미만 '} /> */}
    </PeopleModalContainerDiv>
  );
};

export default PeopleModalContainer;

export const PeopleModalContainerDiv = styled.div`
  position: absolute;
  width: 400px;
  height: 250px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: white;
  top: 134px;
  font-size: 1.1rem;

  right: 282px;
  z-index: 5;
  border-radius: 50px;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 6px 20px;
`;
