import React from 'react';
import {
  LiveContainer,
  AnywhereSubtitle,
  ThumbBox,
  ThumbWrap,
  Img,
  Text,
} from './live-AnyWhere.styles';

const LiveAnyWhere = () => {
  return (
    <LiveContainer>
      <AnywhereSubtitle>Live anywhere</AnywhereSubtitle>
      <ThumbBox>
        <ThumbWrap>
          <Img src="https://i.ibb.co/TRCknfn/alley-2995354-640.jpg" alt="img" />
          <Text>Outdoor getaways</Text>
        </ThumbWrap>
        <ThumbWrap>
          <Img src="https://i.ibb.co/RjY84b8/house-1477041-640.jpg" alt="img" />
          <Text>Unique stays</Text>
        </ThumbWrap>
        <ThumbWrap>
          <Img src="https://i.ibb.co/Y37rvHg/lake-192990-640.jpg" alt="img" />
          <Text>Entire homes</Text>
        </ThumbWrap>
        <ThumbWrap>
          <Img src="https://i.ibb.co/nmmHz5k/cat-252048-640.jpg" alt="img" />
          <Text>Pets allowed</Text>
        </ThumbWrap>
      </ThumbBox>
    </LiveContainer>
  );
};

export default LiveAnyWhere;
