import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Required CSS
import { Carousel } from "react-responsive-carousel";
import { assets } from "../assets/assest";

const ImageCarousel = () => {
  return (
    <div className="max-w-l mx-auto mt-5">
      <Carousel autoPlay infiniteLoop showThumbs={false}>
        <div>
          <img src={assets.bakerybg} alt="Slide 1" />
          <p className="legend">Slide 1</p>
        </div>
        <div>
          <img src={assets.bakerybg2} alt="Slide 2" />
          <p className="legend">Slide 2</p>
        </div>
        <div>
          <img src={assets.breads} alt="Slide 3" />
          <p className="legend">Slide 3</p>
        </div> 
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
