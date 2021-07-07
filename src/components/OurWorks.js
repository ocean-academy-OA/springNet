import React from "react";
import SectionTitle from "./SectionTitle";
import WorkCards from "./WorkCards";

export default function OurWorks() {
  return (
    <div className="our-works" id="our-works">
      <SectionTitle mainColor="blue" id="Our Works" />
      <WorkCards />
    </div>
  );
}
