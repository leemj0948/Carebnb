import React, { useState } from 'react';
import styled from 'styled-components';
import { IoStar, IoHeartOutline, IoHeartSharp } from 'react-icons/io5';
import Imgslider from './Imgslider';
import { connect } from 'react-redux';
const HotelInfo = ({ data, stayDate }) => {
  const [isHeart, setIsHeart] = useState(true);
  const clickHeart = () => {
    setIsHeart(!isHeart);
  };

  const { id, type, city, rating, fee, imgUrl, option1, option2, title } = data;

  const total = stayDate * fee;
  return (
    <>
      <Bar />
      <Form id={id}>
        <ImgSection>
          <Imgslider img={imgUrl} />
        </ImgSection>
        <TextSection>
          <AddressInfo>
            {type} in {city}{' '}
          </AddressInfo>
          <Title>{title} </Title>
          <Bar width="2vw" margin="1vw 0 0.5vw 0" />
          <Info1>{option1}</Info1>
          <Info2>{option2}</Info2>
          <HeartBtn onClick={clickHeart}>
            {isHeart ? (
              <IoHeartOutline style={{ fontSize: '2vw' }} />
            ) : (
              <IoHeartSharp style={{ fontSize: '2vw' }} />
            )}
          </HeartBtn>
          <Price>
            <span className="bold">${fee}</span>/night
          </Price>
          <RatingPrice>
            <span>
              <IoStar style={{ color: 'red' }} />
              {rating}
            </span>
            <span> ${total} total</span>
          </RatingPrice>
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
const ImgSection = styled.span`
  margin: 0 1vw;
  width: 15vw;
  height: 100%;
`;

const TextSection = styled.span`
  display: flex;
  flex-direction: column;
`;
const AddressInfo = styled.span`
  margin-bottom: 1vw;
  font-size: 1.4rem;
  line-height: 18px;
  align-items: center;
  width: 100%;
  color: #b0b0b0;
`;
const Title = styled.span`
  width: 23vw;
`;
const Info1 = styled.span`
  margin-bottom: 1vw;
  font-size: 1.2rem;
  line-height: 18px;
  align-items: center;
  width: 100%;
  color: gray;
`;
const Info2 = styled.span`
  font-size: 1rem;
  line-height: 18px;
  align-items: center;
  width: 100%;
  color: gray;
`;
const HeartBtn = styled.span`
  color: #fe7073;
  position: absolute;
  right: 1vw;
  cursor: pointer;
  z-index: 10;
`;
const RatingPrice = styled.p`
  display: flex;
  padding-top: 5.2rem;
  font-size: 1.1rem;
  justify-content: space-between;
`;
const Price = styled.span`
  position: absolute;
  font-size: 1.7rem;
  right: 1vw;
  bottom: 2vw;
  cursor: pointer;
  .bold {
    font-weight: bold;
  }
`;
// const TotalPrice = styled.span`
//   position: absolute;
//   right: 1vw;
//   bottom: 0;
//   cursor: pointer;
//   font-size: 1.2rem;
//   line-height: 18px;
//   align-items: center;
//   text-decoration: underline;
//   color: #c0c0c0;
// `;
const mapStateToProps = ({ booking: { stayDate } }) => ({
  stayDate,
});

// const mapDispatchToProps = (dispatch)=>({
//   getTotalValue:
// })
export default connect(mapStateToProps, null)(HotelInfo);
