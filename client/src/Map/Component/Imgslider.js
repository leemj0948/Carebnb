import React, { useState } from 'react';
import styled from 'styled-components';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

const Imgslider = props => {
  const { img } = props;
  const [moveX, setMoveX] = useState(0);
  const slideHandle = number => {
    setMoveX(moveX + number);
  };
  return (
    <Frame>
      {!(moveX === 0) && (
        <Arrow left="1vw">
          <MdKeyboardArrowLeft
            style={{ width: '120%', height: '113%' }}
            onClick={() => {
              slideHandle(15);
            }}
          />
        </Arrow>
      )}
      {!(moveX === -45) && (
        <Arrow right="1vw">
          <MdKeyboardArrowRight
            style={{ width: '120%', height: '113%' }}
            onClick={() => {
              slideHandle(-15);
            }}
          />
        </Arrow>
      )}
      <Images style={{ transform: `translateX(${moveX}vw)` }}>
        {Boolean(img.length) &&
          img.map((elm, index) => {
            return <Img src={elm} key={index} />;
          })}
      </Images>
    </Frame>
  );
};

const Frame = styled.div`
  position: relative;
  overflow: hidden;
`;
const Images = styled.div`
  display: flex;
  width: auto;
  height: 15vw;
  transition: 0.5s ease-out;
`;
const Img = styled.img`
  width: 15vw;
  height: 15vw;
`;

const Arrow = styled.div`
  position: absolute;
  top: 40%;
  left: ${props => props.left || ''};
  right: ${props => props.right || ''};
  width: 3vw;
  height: 3vw;
  border-radius: 50%;
  background-color: lightgrey;
  z-index: 99;
`;

export default Imgslider;
