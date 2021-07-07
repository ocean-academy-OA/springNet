import React from "react";
import SectionTitle from "./../common/SectionTitle";
import { FaPhone, FaEnvelope } from "react-icons/fa";

export default function ContactUs() {
  return (
    <div className="contact-us" id="cantact-us">
      <SectionTitle id="Let's Get In Touch!" mainColor="blue" />
      <div className="cantact-us-text">
        Ready to start your next project with us? Give us a call or send us an
        email and we will get back to you as soon as possible!
      </div>
      <div className="cantact-all-info">
        <div className="info-content">
          <div className="info-icon">
            <FaPhone />
          </div>
          <div className="info-text">0413-2238675</div>
        </div>
        <div className="info-content">
          <div className="info-icon">
            <FaEnvelope />
          </div>
          <a className="info-text email">info@springnet.in</a>
        </div>
      </div>
    </div>
  );
}
