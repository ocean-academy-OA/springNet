import React from "react";

export default function ServiceCard(props) {
  return (
    <div className="service-card">
      {props.icon}
      <div className="service-title">{props.title}</div>
      <div className="service-subtitle">{props.subtitle}</div>
    </div>
  );
}
