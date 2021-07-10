import React from "react";

export default function WorkCards({ work }) {
  return (
    <div className="work-div">
      <div className="work-image">
        <img src={work.image} alt="" className="" />
      </div>
      <div className="work-content">
        <div className="main-content">
          <div className="company-name">{work.companyName}</div>
          <div className="company-info">{work.description}</div>
        </div>
        <div className="sub-content">
          <div className="used-technology">
            <span className="lable">Techonologies used : </span>
            {work.technologies}
          </div>

          <div className="category">
            <span className="lable">Category : </span>
            {work.category}
          </div>

          <div className="btn-div">
            <a
              type="button"
              target="_blank"
              className="visit-button btn btn-primary"
              href={work.appLink}
            >
              Visit
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
