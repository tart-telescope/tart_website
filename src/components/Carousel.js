import React from 'react';
import Slider from 'react-slick';

const Carousel = () => {
  const slides = [
    {
      image: 'https://tart.elec.ac.nz/slideshow_1.jpg',
      caption: 'Slide 1',
    },
    {
      image: 'https://tart.elec.ac.nz/slideshow_2.jpg',
      caption: 'Slide 2',
    },
    {
      image: 'https://tart.elec.ac.nz/slideshow_3.jpg',
      caption: 'Slide 3',
    },
  ];

  return (
    <Slider dots={true}>
      {slides.map(slide => (
        <div key={slide.image}>
          <img src={slide.image} alt={slide.caption} />
          <p>{slide.caption}</p>
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
