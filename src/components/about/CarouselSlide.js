import React from "react";
import { Carousel } from "react-bootstrap";

export default function CarouselSlide() {
  return (
    <React.Fragment>
      <div className="carousel-div">
        <p>At Springnet Technology, we call this philosophy 'The Expertise.'</p>
        <div className="all-carousel">
          <Carousel>
            <Carousel.Item interval={1000}>
              <div className="div-per-carousel">
                <div className="carousel-image-div">
                  <div className="carousel-image"></div>
                  <div className="carousel-text">image 1</div>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <div className="div-per-carousel">
                <div className="carousel-image-div">
                  <div className="carousel-image"></div>
                  <div className="carousel-text">image 2</div>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </React.Fragment>
  );
}
