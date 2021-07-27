import React, { useEffect } from 'react';
import styled from 'styled-components';

const { kakao } = window;
const Mymap = props => {
  useEffect(() => {
    const container = document.getElementById('myMap');
    const options = {
      center: new kakao.maps.LatLng(37.55477729337783, 126.97564531140856),
      level: 4,
    };
    // const map = new kakao.maps.Map(container, options);
  }, []);

  return (
    <Background>
      <Mymaps id="myMap"></Mymaps>
    </Background>
  );
};
const Background = styled.div`
  position: relative;
  width: 100vw;
`;

const Mymaps = styled.span`
  position: absolute;
  top: -20vw;
  right: 10px;
  width: 50vw;
  height: 600px;
`;

export default Mymap;
