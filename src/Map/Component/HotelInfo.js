import React, { useState } from 'react';
import styled from 'styled-components';
import { IoHeartOutline, IoHeartSharp } from 'react-icons/io5';
import ImgSlider from './ImgSlider';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

const HotelInfo = ({ data }) => {
  const [isHeart, setIsHeart] = useState(true);
  const [moveX, setMoveX] = useState(0);
  const clickHeart = () => {
    setIsHeart(!isHeart);
    console.log(isHeart);
  };
  const slideHandle = number => {
    setMoveX(moveX + number);
  };
  const { address, fee, imgUrl, option1, option2, title } = data;
  return (
    <>
      <Bar />
      <Form>
        <ImgSection>
          {!imgUrl[0] && (
            <MdKeyboardArrowLeft
              style={{
                fontSize: '3vw',
                position: 'absolute',
                top: '6vw',
                zIndex: 999,
              }}
              onClick={() => {
                slideHandle(15);
              }}
            />
          )}

          <ImgSlider img={imgUrl} moveX={moveX} slideHandle={slideHandle} />
          {!imgUrl[2] && (
            <MdKeyboardArrowRight
              style={{
                fontSize: '3vw',
                position: 'absolute',
                top: '6vw',
                right: 0,
                zIndex: 999,
              }}
              onClick={() => {
                slideHandle(-15);
              }}
            />
          )}
        </ImgSection>
        <TextSection>
          <AddressInfo>{address} 의 집 전체 </AddressInfo>
          <Title>{title} </Title>
          <Bar width="2vw" margin="1vw 0 0.5vw 0" />
          <Info1>{option1}</Info1>
          <Info2>{option2}</Info2>
          <HeartBtn onClick={clickHeart}>
            {isHeart ? (
              <IoHeartOutline style={{ fontSize: '2vw' }} />
            ) : (
              <IoHeartSharp style={{ fontSize: '2vw', color: 'red' }} />
            )}
          </HeartBtn>
          <Price>₩{fee.toLocaleString('ko-KR')} / 박</Price>
          <TotalPrice>총액 ₩ 0</TotalPrice>
        </TextSection>
      </Form>
    </>
  );
};

const Form = styled.div`
  position: relative;
  width: 100%;
  height: 15vw;
  ${({ theme }) => theme.flexSet('flex-start', 'flex-start')}
`;
const Bar = styled.div`
  width: ${props => props.width || '100%'};
  height: 1px;
  margin: ${props => props.margin || '2vw 0'};
  background-color: #d3d3d3;
`;
const ImgSection = styled.div`
  position: relative;
  margin: 0 1vw;
  width: 15vw;
  height: 100%;
  overflow: hidden;
`;

const TextSection = styled.span`
  display: flex;
  flex-direction: column;
`;
const AddressInfo = styled.span`
  margin-bottom: 1vw;
  font-size: 14px;
  line-height: 18px;
  align-items: center;
  width: 100%;
  color: #c0c0c0;
`;
const Title = styled.span`
  width: 23vw;
`;
const Info1 = styled.span`
  margin-bottom: 1vw;
  font-size: 14px;
  line-height: 18px;
  align-items: center;
  width: 100%;
  color: #c0c0c0;
`;
const Info2 = styled.span`
  font-size: 14px;
  line-height: 18px;
  align-items: center;
  width: 100%;
  color: #c0c0c0;
`;
const HeartBtn = styled.span`
  position: absolute;
  right: 1vw;
  cursor: pointer;
  z-index: 10;
`;
const Price = styled.span`
  position: absolute;
  right: 1vw;
  bottom: 2vw;
  cursor: pointer;
`;
const TotalPrice = styled.span`
  position: absolute;
  right: 1vw;
  bottom: 0;
  cursor: pointer;
  font-size: 14px;
  line-height: 18px;
  align-items: center;
  color: #c0c0c0;
`;

export default HotelInfo;
