import { Carousel } from "react-bootstrap";
import React from "react";
import CarouselSlide from "./CarouselSlide";
import SectionTitle from "./../common/SectionTitle";

export default function AboutUs() {
  return (
    <div className="about-container" id="about-us">
      <SectionTitle id="About" />
      <div className="about-content-div">
        <p>
          Springnet Technology is a leading IT firm of Indian origin which aims
          to deliver unmatched business value to customers through a combination
          of process excellence, quality frameworks and service delivery
          innovation. Choose one of our open source, free to download, and easy
          to use themes! No strings attached!
        </p>
        <p>
          We work to bring together a team of technology, business, and social
          visionaries. Our objective is to develop an environment of Honesty and
          Integrity towards our clients, employees, vendors and society at
          large. We are committed to our customers, partners and have a passion
          for technology. We take on big challenges, and pride ourselves on
          seeing them through.
        </p>
        <p>
          We hold ourselves accountable to our Customers, Partners and Employees
          by honoring our commitments, providing results, and striving for the
          highest quality Springnet Technology has a team of experts in every
          field encompassing IT Services and Software Development. Springnet
          Technology also provides a complete range of services by leveraging
          our domain and business expertise with leading technology providers.
        </p>
      </div>
      {/* carousel */}
      <CarouselSlide />
    </div>
  );
}
