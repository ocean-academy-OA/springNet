import React from "react";

export default function Technologies(props) {
  return (
    <div className="Technologies">
      <img src={props.img} className="tech-img" />
      <div className="tech-name">{props.techName}</div>
    </div>
  );
}
