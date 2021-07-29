import React from "react";
// import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { ImLocation2 } from "react-icons/im";
import { GrMail } from "react-icons/gr";
import { FaMobileAlt } from "react-icons/fa";
import {
  TiSocialTwitter,
  TiSocialFacebook,
  TiSocialLinkedin,
} from "react-icons/ti";
import "bootstrap/dist/css/bootstrap.css";
import Map from "./map.svg";
import "./contactUs.css";
import AUS from "./au.png";
import UAS from "./us.png";
import IND from "./in.png";

export default function ContactUs() {
  return (
    <div className="contect-us-map">
      <div className="map-div">
        <img className="map" src={Map} alt="" />
        <div className="address">
          <div className="hr"></div>
          <div className="dots">
            <div className="dot">
              <img src={UAS} alt="" />
            </div>
            <div className="dot">
              <img src={IND} alt="" />
            </div>
            <div className="dot">
              <img src={AUS} alt="" />
            </div>
          </div>
        </div>
        <div className="location">
          <div className="content">
            <p>
              {" "}
              <ImLocation2 className="icons" /> 1473 royal gold dr Columbus,
              Ohio 43240
            </p>

            <p>
              {" "}
              <GrMail className="icons" /> test@gmail.com{" "}
            </p>
            <p>
              {" "}
              <FaMobileAlt className="icons" /> +1 (614) 632-9349
            </p>
          </div>
          <div className="content">
            <p>
              {" "}
              <ImLocation2 className="icons" /> No. 2, Karuvadikuppam Main Rd,
              Senthamarai Nagar, Muthialpet, Puducherry, 605003
            </p>
            <p>
              {" "}
              <GrMail className="icons" /> test@gmail.com
            </p>

            <p>
              {" "}
              <FaMobileAlt className="icons" /> +01 123456789
            </p>
          </div>
          <div className="content">
            <p>
              {" "}
              <ImLocation2 className="icons" /> 4/65 Press Road Brooklyn Park
              -5032 SA{" "}
            </p>
            <p>
              {" "}
              <GrMail className="icons" /> test@gmail.com{" "}
            </p>
            <p>
              {" "}
              <FaMobileAlt className="icons" /> +01 123456789
            </p>
          </div>
        </div>
        <div className="social-media">
          <div className="social-icon">
            <TiSocialFacebook />
          </div>{" "}
          <div className="social-icon">
            {" "}
            <TiSocialTwitter />
          </div>
          <div className="social-icon">
            <TiSocialLinkedin />
          </div>{" "}
        </div>
      </div>
    </div>
  );
}
