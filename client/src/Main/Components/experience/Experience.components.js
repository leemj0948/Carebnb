import React from 'react';
import {
  ExperienceContainer,
  ExperienceSubtitle,
  ThumbWrap,
  Img,
  Subtitle,
  Text,
  ThumbBox,
} from './Experience.style';

const Experience = () => {
  return (
    <ExperienceContainer>
      <ExperienceSubtitle>Discover Experiences</ExperienceSubtitle>
      <ExperienceSubtitle size="25px">
        Unique activities with local experts—in person or online.
      </ExperienceSubtitle>
      <ThumbBox>
        <ThumbWrap>
          <Img src="https://i.ibb.co/TRCknfn/alley-2995354-640.jpg" alt="img" />
          <Subtitle>Featured collection: Wanderlust</Subtitle>
          <Text>Travel from home with Online Experiences.</Text>
        </ThumbWrap>
        <ThumbWrap>
          <Img src="https://i.ibb.co/RjY84b8/house-1477041-640.jpg" alt="img" />
          <Subtitle>Online Experiences</Subtitle>
          <Text>Live, interactive activities led by Hosts.</Text>
        </ThumbWrap>
        <ThumbWrap>
          <Img src="https://i.ibb.co/Y37rvHg/lake-192990-640.jpg" alt="img" />
          <Subtitle>Experiences</Subtitle>
          <Text>Local things to do, wherever you are.</Text>
        </ThumbWrap>
      </ThumbBox>
    </ExperienceContainer>
  );
};

export default Experience;
