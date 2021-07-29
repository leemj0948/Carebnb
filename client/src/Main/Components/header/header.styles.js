import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { IoSearch } from 'react-icons/io5';
import Calender from '../Calander.components/Calander';

export const HeaderContainer = styled.div`
  position: relative;
  z-index: 5;
  background-color: ${props => props.background};
  font-family: 'Open Sans Condensed';
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 30px 40px;
  margin: 10px auto;
  top: ${props => props.topPosition};
  position: ${props => props.positionStyle};
  width: 100%;
  box-shadow: ${props => props.shadowStyle};
`;

export const HeaderContainerOthers = styled.div`
  background: white;
  top: 0px;
  margin: 0;
  position: relative;
  z-index: 5;
  background-color: ${props => props.background};
  font-family: 'Open Sans Condensed';
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 30px 40px;
  top: ${props => props.topPosition};
  position: ${props => props.positionStyle};
  width: 100%;
  box-shadow: ${props => props.shadowStyle};
`;

export const ButtonContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  margin: 10px auto;
  justify-content: space-evenly;
  font-size: 1.4rem;
`;
export const MiddleBox = styled.div`
  width: 70%;
  padding: 0px 5%;
  display: flex;
  flex-direction: column;
`;
export const LogoText = styled(Link)`
  font-size: 32px;
  padding: 0.2em;
`;
export const MiddleButton = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  cursor: pointer;
`;

const showText = css`
  display: block;
`;

const hideText = css`
  display: none;
`;
const controllTextStyles = props => {
  if (props.sizeValue) {
    return showText;
  }
  return hideText;
};

const smallNavStyles = css`
  width: 50%;
  margin: 0 auto;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 50px;
  transition-delay: 250ms;
  transition-property: margin-right;
`;

const bigNavStyles = css`
  display: flex;
  flex-direction: row;
  background-color: white;
  border: 1px solid #ebebeb;
  margin: 0 auto;
  border-radius: 50px;
`;

const getNavStyles = props => {
  if (props.sizeValue) {
    return bigNavStyles;
  }
  return smallNavStyles;
};
export const SearchContainer = styled.div`
  ${getNavStyles}
`;

export const CalenderWrap = styled.div`
  height: 50%;
  padding: 0px;
  margin: 0;
`;
export const CheckInOut = styled.div`
  display: flex;
  flex-direction: row;
`;
export const SearchBox = styled.div`
  background-color: white;
  padding: 10px 18px;
  border-radius: 50px;
  height: 60px;
  flex-direction: ${props => props.row || 'column'};
  ${controllTextStyles}
  &:hover {
    background-color: #ebebeb;
  }
`;
const test = css`
  transition-duration: 500ms;
  font-weight: bold;
  transition-delay: 250ms;
  transition-property: all;
`;
const searchAnimationActivate = css`
  transition-property: margin-right;
  color: black;
`;
const controallAnimation = props => {
  if (props.animation) {
    return searchAnimationActivate;
  }
  return test;
};
export const SmallSearchBox = styled.div`
  background-color: white;
  padding: 10px 18px;
  border-radius: 50px;
  height: 50px;
  display: flex;
  flex-direction: row;
  ${controallAnimation}
`;

export const Icon = styled.div`
  display: ${props => props.flex || 'block'};
`;
export const Option = styled.div`
  width: 150px;
  line-height: 21px;
  justify-content: space-between;
`;
export const Subtitle = styled.div`
  padding-right: ${props => props.padding || '0%'};
  margin-left: 1rem;
  line-height: ${props => props.lineHeight || '1.2rem'};
  font-size: 1.2rem;
`;
export const Search = styled.input.attrs(props => ({
  placeholder: props.where,
}))`
  background-color: transparent;
  margin-left: 1rem;
`;
export const CalendarStyle = styled(Calender)`
  background-color: transparent;
  border: none;
`;
export const SearchIcon = styled.button`
  color: white;
  font-size: 28px;
  text-align: center;
  background-color: #ff385c;
  color: white;
  heigth: 35px;
  width: ${props => (props.value ? '35px' : '100px')};
  border-radius: ${props => (props.value ? '50%' : '21px')};
  &:hover {
    background-color: #e41d56;
  }
`;

export const MagnificationIcon = styled(IoSearch)`
  color: white;
  padding-right: 3px;
  line-height: 1rem;
  font-size: 1.7rem;
`;
export const OptionContainer = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: flex-end;
  width: 15%;
`;
export const Vline = styled.div`
  border: 0.1px solid gainsboro;
  height: 35px;
  position: relative;
  top: 13px;
`;
export const Hostbtn = styled.div`
  width: 50%;
  height: 50%;
  cursor: pointer;
  font-size: 1.2rem;
  padding: 0.5rem 0;
`;

export const LinkBox = styled(Link)``;

export const HiddenSpan = styled.span`
  font-size: 20px;
  vertical-align: text-top;
  line-height: 35px;
  color: white;
`;
