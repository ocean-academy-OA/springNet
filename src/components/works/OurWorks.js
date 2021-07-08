import React from "react";
import SectionTitle from "./../common/SectionTitle";
import WorkCards from "./WorkCards";
import "./works.css";
import { workList } from "./worksList";
import { Carousel } from "react-bootstrap";

export default function OurWorks() {
  return (
    <div className="our-works" id="our-works">
      <SectionTitle id="Our Works" />
      {/* <Carousel>
        {workList.map((work) => (
          <Carousel.Item nterval={5000}>
            <div className="slid-div">
              <WorkCards work={work} />
            </div>
          </Carousel.Item>
        ))}
      </Carousel> */}

      {workList.map((work, index) => (
        <div key={index} className="slid-div">
          <WorkCards work={work} />
        </div>
      ))}
    </div>
  );
}
