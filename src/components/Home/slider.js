import React from 'react';
import Slider from 'react-slick';

export default class HomeSlider extends React.Component {

  render() {
    const settings = {
      dots: true,
      infinite: true,
      pauseOnHover: true,
      adaptiveHeight: true,
      autoplay: true,
      autoplaySpeed: 3500,
      speed: 900,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="megatron">
        <Slider {...settings}>
          <img src="http://lorempixel.com/1000/300/people" alt="image1"/>
          <img src="http://lorempixel.com/1000/300/people/2" alt="image2"/>
          <img src="http://lorempixel.com/1000/300/people/3" alt="image3"/>
          <img src="http://lorempixel.com/1000/300/people/4" alt="image4"/>
          <img src="http://lorempixel.com/1000/300/people/5" alt="image5"/>
          <img src="http://lorempixel.com/1000/300/people/6" alt="image6"/>
        </Slider>
      </div>
    );
  }
}