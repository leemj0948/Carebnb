import styled from 'styled-components';
const Gray = '#c0c0c0';

export const ModalBox = styled.div``;
export const ModalWrap = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 1rem;
`;
export const TypeBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
`;

export const Subtitle = styled.div`
  font-weight: bold;
`;
export const AgeRange = styled.div`
  font-color: ${Gray};
`;
export const PeopleAmountBtn = styled.div`
  display: flex;
  flex-direction: row;
  width: 40%;
  text-align: center;
`;
export const ChangeNo = styled.div`
  font-color: ${Gray};
  width: 33.3%;
  cursor: pointer;
  border-radius: 50%;
  border: 1px solid;
  border-color: ${props => (props.value == 0 ? '#e8e6e6' : Gray)};
  padding: 10px;
`;
export const PeopleNo = styled.div`
  font-color: ${Gray};
  padding: 10px;
  width: 33.3%;
`;
