import React, { useEffect } from 'react';
import styled from 'styled-components';
import Mymap from './Component/Mymap';
import Hotels from './Hotels';

const MapMainPage = props => {
  return (
    <Background>
      <Hotels />
      <Mymap />
    </Background>
  );
};
const Background = styled.div`
  position: relative;
  ${({ theme }) => theme.flexSet('space-around', 'center')}
`;

export default MapMainPage;
