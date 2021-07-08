import React from "react";

export default function ServiceCard(props) {
  return (
    <div className="service-card">
      <div className="icon-bg">
        <i className="icon ceyan">{props.icon}</i>
      </div>
      <div className="service-title">{props.title}</div>
      <div className="service-subtitle">{props.subtitle}</div>
    </div>
  );
}
