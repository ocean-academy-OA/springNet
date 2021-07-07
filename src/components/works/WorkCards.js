import React from "react";
import OA from "./../images/our_works/oa.png";
import OA2 from "./../images/our_works/oa2.png";
import Patchi from "./../images/patchi.png";

export default function WorkCards() {
  return (
    <div className="work-div">
      <div className="work-image">
        {/* <img src={OA2} alt="" className="" /> */}
        <img src={OA} alt="" className="" />
      </div>
      <div className="work-content">
        <div className="main-content">
          <div className="company-name">Ocean Academy</div>
          <div className="company-info">
            WoodsDeck is a social platform for movie lovers. The app will show a
            personalized feed that offers exclusive movie photos, trailers and
            news related to movies and actors you follow. It also has analytics
            platform to help the movie marketers.
          </div>
        </div>
        <div className="sub-content">
          <div className="used-technology">
            <span className="lable">Techonologies used : </span>Ruby on Rails,
            Javascript/jQuery, MySQL, Elastic Search, Amazon EC2, Apache,
            Phusion Passenger, Amazon S3
          </div>

          <div className="category">
            <span className="lable">Category :</span>Web Development, Web Design
          </div>

          <div className="btn-div">
            <button className="visit-button btn btn-primary">Visit</button>
          </div>
        </div>
      </div>
    </div>
  );
}
