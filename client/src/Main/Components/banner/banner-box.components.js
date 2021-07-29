import React from 'react';
import {
  BannerContainer,
  Img,
  TextWrap,
  Subtitle,
  Desc,
} from './banner.styles';
const BannerBox = ({ desc, subtitle, imgUrl }) => {
  return (
    <BannerContainer>
      <Img src={imgUrl} alt="" />
      <TextWrap>
        <Subtitle>{subtitle}</Subtitle>
        <Desc>{desc}</Desc>
      </TextWrap>
    </BannerContainer>
  );
};

export default BannerBox;
