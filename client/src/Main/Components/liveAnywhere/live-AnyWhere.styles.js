import styled from 'styled-components';

export const LiveContainer = styled.div`
  padding-top: 1rem;
  z-index: 0;
  position: relative;
  display: flex;
  flex-direction: column;
  top: 50vw;
`;
export const AnywhereSubtitle = styled.h1`
  font-size: 30px;
  margin: auto 10%;
  padding: 0px 0px 15px 10px;
`;
export const ThumbBox = styled.div`
  justify-content: space-around;
  display: flex;
  flex-direction: row;
  width: 80%;
  align-items: center;
  margin: 50px auto;
`;
export const ThumbWrap = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

export const Img = styled.img`
  height: 200px;
  width: 200px;
  border-radius: 10px;
`;

export const Text = styled.h3`
  line-height: 2rem;
`;
