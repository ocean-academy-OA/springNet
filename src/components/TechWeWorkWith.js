import React from "react";
import SectionTitle from "./SectionTitle";
import Technologies from "./Technologies";
import Flutter from "./images/course/Flutterf.png";
import { courses } from "./images/course/courses";

export default function TechWeWorkWith() {
  return (
    <div className="we-work-with">
      <SectionTitle mainColor="blue" id="Technologies we work with" />
      <div className="all-tech">
        <Technologies techName="Android" img={courses.Android} />
        <Technologies techName="Angular" img={courses.Angular} />
        <Technologies techName="Bootstrap" img={courses.Bootstrap} />
        <Technologies techName="CSS" img={courses.CSS} />
        <Technologies techName="Django" img={courses.Django} />
        <Technologies techName="Firebase" img={courses.Firebase} />
        <Technologies techName="Flask" img={courses.Flask} />
        <Technologies techName="Flutter" img={courses.Flutter} />
        <Technologies techName="Git" img={courses.Git} />
        <Technologies techName="HTML" img={courses.HTML} />
        <Technologies techName="JavaScript" img={courses.JavaScript} />
        <Technologies techName="MySQL" img={courses.MySQL} />
        <Technologies techName="Python" img={courses.Python} />
        <Technologies techName="React" img={courses.React} />
        <Technologies techName="jQuery" img={courses.jQuery} />
      </div>
    </div>
  );
}
