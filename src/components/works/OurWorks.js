import React from "react";
import SectionTitle from "./../common/SectionTitle";
import WorkCards from "./WorkCards";
import "./works.css";

export default function OurWorks() {
  return (
    <div className="our-works" id="our-works">
      <SectionTitle mainColor="blue" id="Our Works" />
      <WorkCards />
    </div>
  );
}
