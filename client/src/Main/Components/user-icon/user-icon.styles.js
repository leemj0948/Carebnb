import styled, { css } from 'styled-components';
import { IoPersonCircle } from 'react-icons/io5';
import { FaBars } from 'react-icons/fa';
export const ButtonWrap = styled.button`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  cursor: pointer;
  background-color: white;
  width: 35%;
  height: 45px;
  padding: 4px;
  border: 1px solid gray;
  border-radius: 27px;
  justify-content: space-around;
  border: gray;
  &:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  }
`;
export const IconWrap = styled.div`
  margin: 10% 5%;
  margin-top: ${props => props.top || '0%'}; ;
`;
const LeftButtonContainer = css`
  font-size: ${props => props.size || '20px'};
`;

export const LeftHamIcon = styled(FaBars)`
  ${LeftButtonContainer}
`;
export const LeftAvataIcon = styled(IoPersonCircle)`
  ${LeftButtonContainer}
`;
