import React, { useEffect } from 'react';
import styled from 'styled-components';

const { kakao } = window;
const Mymap = props => {
  useEffect(() => {
    const container = document.getElementById('myMap');
    const options = {
      center: new kakao.maps.LatLng(37.55477729337783, 126.97564531140856),
      level: 10,
    };
    const map = new kakao.maps.Map(container, options);
    //마커이미지
    let markerImgSrc =
      'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png';
    let imageSize = new kakao.maps.Size(64, 69);
    let imageOption = { offset: new kakao.maps.Point(27, 69) };
    let markerImage = new kakao.maps.MarkerImage(
      markerImgSrc,
      imageSize,
      imageOption
    );

    //마커 클러스터러
    const clusterer = new kakao.maps.MarkerClusterer({
      map: map,
      averageCenter: true,
      minLevel: 10,
      disableClickZoom: true,
    });

    fetch('./data/Cluster.json')
      .then(res => res.json())
      .then(data => {
        let markers = data.positions.map(function (position) {
          return new kakao.maps.Marker({
            position: new kakao.maps.LatLng(position.lat, position.lng),
            image: markerImage,
          });
        });
        clusterer.addMarkers(markers);
      });
    kakao.maps.event.addListener(clusterer, 'clusterclick', function (cluster) {
      let level = map.getLevel() - 1;
      clusterer.setStyles([
        {
          width: '40px',
          height: '40px',
          background: 'black',
          color: '#fff',
          textAlign: 'center',
          lineHeight: '40px',
          borderRadius: '50px',
        },
        {
          width: '60px',
          height: '60px',
          background: 'white',
          color: 'blue',
          border: '1px solid blue',
          textAlign: 'center',
          lineHeight: '60px',
          borderRadius: '60px',
        },
      ]);

      clusterer.redraw();
      map.setLevel(level, { anchor: cluster.getCenter() });
    });
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
