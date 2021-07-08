import React from "react";
import { Carousel } from "react-bootstrap";
import { carousels } from "./carouselDetrails";

export default function CarouselSlide() {
  return (
    <React.Fragment>
      <div className="carousel-div">
        <p>At Springnet Technology, we call this philosophy 'The Expertise.'</p>
        <div className="all-carousel">
          <Carousel>
            {carousels.map((carousel, index) => (
              <Carousel.Item interval={1000}>
                <div key={index} className="div-per-carousel">
                  <div className="carousel-image-div">
                    <div className="carousel-image">
                      <img src={carousel.image} alt="" />
                    </div>
                    <div className="carousel-text">{carousel.title}</div>
                  </div>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </React.Fragment>
  );
}
