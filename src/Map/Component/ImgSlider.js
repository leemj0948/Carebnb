import React, { useState } from 'react';
import styled from 'styled-components';

const ImgSlider = props => {
  const { img, moveX } = props;

  return (
    <ImgFrame style={{ transform: `translateX(${moveX}vw)` }}>
      {img.map((elm, idx) => {
        return (
          <ImgBox>
            <Img src={elm} key={idx} />
          </ImgBox>
        );
      })}
    </ImgFrame>
  );
};

const ImgFrame = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  overflow: hidden;
  flex-wrap: nowrap;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  transition: 0.5s ease-out;
`;
const ImgBox = styled.div`
  position: absolute;
`;
const Img = styled.img`
  width: 100%;
`;

export default ImgSlider;
