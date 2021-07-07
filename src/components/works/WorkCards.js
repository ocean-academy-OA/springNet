import React from "react";
import OA from "./../images/logo.png";
import Patchi from "./../images/patchi.png";

export default function WorkCards() {
  return (
    <div className="all-works">
      <div className="works-image-div">
        <div className="works-image">
          <img src={OA} alt="" />
        </div>
        <div className="works-text">image 1</div>
      </div>
      <div className="works-image-div">
        <div className="works-image">
          <img src={Patchi} alt="" />
        </div>
        <div className="works-text">image 1</div>
      </div>
      <div className="works-image-div">
        <div className="works-image">
          <img src={Patchi} alt="" />
        </div>
        <div className="works-text">image 1</div>
      </div>
    </div>
  );
}
