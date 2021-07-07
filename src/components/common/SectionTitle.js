import React from "react";

export default function SectionTitle(props) {
  return (
    <div className="section-div">
      <div className={`section-title ${props.mainColor}`}>{props.id}</div>
    </div>
  );
}
