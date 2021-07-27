import styled from 'styled-components';

export const BannerContainer = styled.div`
  padding-top: 1rem;
  z-index: 0;
  position: relative;
  display: flex;
  flex-direction: column;
  top: 50vw;
`;

export const Img = styled.img`
  width: 80%;
  border-radius: 10px;
  margin: 0 auto;
  height: 402px;
  object-fit: cover;
`;

export const TextWrap = styled.div`
  z-index: 1;
  position: absolute;
  top: 20%;
  margin: auto 15%;
`;

export const Subtitle = styled.h1`
  width: 55%;
  font-size: 4rem;
  font-weight: bold;
  letter-spacing: 0.02em;
  line-height: 1;
`;

export const Desc = styled.p`
  color: #222222;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: -0.01em;
  line-height: 22px;
`;
