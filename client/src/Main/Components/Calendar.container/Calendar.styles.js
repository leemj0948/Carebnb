import styled from 'styled-components';
import Calender from '../Calander.components/Calander';
export const CalenderBox = styled.div`
  margin-top: 3rem;
  background-color: white;
  z-index: 0;
  position: relative;
  flex-direction: row;
  display: flex;
  padding: 3rem;
`;

export const CalenderOutline = styled(Calender)`
  border: none;
`;
