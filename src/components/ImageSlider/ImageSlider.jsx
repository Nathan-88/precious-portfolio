import React, { useState, useEffect, useRef } from 'react';
import './ImageSlider.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import img1 from "../../assets/col_22.jpg"
import img2 from "../../assets/col_2.jpg"
import img3 from "../../assets/col_22.jpg"
import img4 from "../../assets/col_2.jpg"

const images = [
  { src: img1, text: 'Caption for Image 1', alt: 'Image 1'},
  { src: img2, text: 'Caption for Image 2', alt: 'Image 2'},
  { src: img3, text: 'Caption for Image 3', alt: 'Image 3'},
  { src: img4, text: 'Caption for Image 4', alt: 'Image 4'},
];




const ImageSlider = () => {
  const [centerIndex, setCenterIndex] = useState(2); 

  const settings = {
    infinite: true,
    className: 'center',
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    autoplay: true,
    autoplaySpeed: 3000,
    afterChange: setCenterIndex,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="hidden md:block rimage-slider slider-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="image-slide relative"  style={{ width: centerIndex === index ? '100%' : '0%' }}>
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-[550px] object-cover"
            />
            {centerIndex === index && (
              <div className="absolute bottom-4 left-4 text-white bg-black bg-opacity-50 p-2 rounded">
                {image.text}
              </div>
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;