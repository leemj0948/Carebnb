import styled from 'styled-components';
export const ExperienceContainer = styled.div`
  padding-top: 4rem;
  z-index: 0;
  position: relative;
  display: flex;
  flex-direction: column;
  top: 50vw;
`;
export const ExperienceSubtitle = styled.h1`
  font-size: ${props => props.size || '30px'};
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
  width: 33%;
`;

export const Img = styled.img`
  height: 330px;
  width: 330px;
  border-radius: 10px;
  margin: 0 auto;
`;

export const Subtitle = styled.p`
  font-size: 18px;
  font-weight: bold;
  padding: 10px 10px;
`;
export const Text = styled.h3`
  line-height: 1rem;
  font-size: 13.2px;
  padding: 10px 10px;
`;
