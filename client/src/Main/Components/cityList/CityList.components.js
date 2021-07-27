import React from 'react';
import './CityList.style.scss';
class CityList extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          id: 1,
          city: 'Seoul',
          imgUrl: 'https://i.ibb.co/SXX4q52/Untitled-1.jpg',
          distance: 30,
          linkUrl: 'city/seoul',
        },
        {
          id: 2,
          city: 'Incheon',
          imgUrl: 'https://i.ibb.co/6BBSMKt/Untitled-2.jpg',
          distance: 30,
          linkUrl: 'city/incheon',
        },
        {
          id: 3,
          city: 'Bucheon',
          imgUrl: 'https://i.ibb.co/2jphBp0/Untitled-3.jpg',
          distance: 30,
          linkUrl: 'city/bucheon',
        },
        {
          id: 4,
          city: 'Gapyung',
          imgUrl: 'https://i.ibb.co/ccs7tjF/Untitled-4.jpg',
          distance: 30,
          linkUrl: 'city/gapyung',
        },
      ],
    };
  }

  render() {
    // const { collections } = this.state;
    return (
      <div className="landmark-page">
        <h1 className="subtitle">Explore nearby</h1>
        <div className="thumb-Box">
          {this.state.sections.map(({ id, city, imgUrl, distance }) => (
            <div className="thumb-Wrap" key={id}>
              <img src={imgUrl} alt="thumb" className="img" />
              <div className="text-box">
                <span className="city">{city}</span>
                <span className="distance"> {distance} minute drive</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default CityList;
