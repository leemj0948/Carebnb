import React from 'react';
import care from '../../../assets/carebnb_bg.jpg';
// import care from '../../../src/assets/carebnb_bg.jpg';
import './top-banner.components.scss';
const TopBanner = () => {
  return (
    <div className="banner-container ">
      <div
        className="img-contanier"
        style={{ backgroundImage: `url(${care})`, backgroundSize: 'cover' }}
      />
      <div className="content-wrap">
        <h1>Natural Life</h1>
        <p>Carebnb Wish List</p>
      </div>
    </div>
  );
};

export default TopBanner;
