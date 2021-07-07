import React from "react";
import SectionTitle from "./SectionTitle";
import ServiceCard from "./ServiceCard";
import { FaMobileAlt, FaNetworkWired } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";

export default function AtYourService() {
  const title = [
    "Mobile App Development",
    "Web App Development",
    "Hybrid Development",
  ];
  const subtitle = [
    "Creating mobile applications for android platform using Android and Firebase.",
    "Creating Web application using HTML5, CSS3 and JS Frameworks.",
    "Creating incredible hybrid apps from simple to complex requirements Flutter Framework.",
  ];
  const icon = [
    <FaMobileAlt className="icon" />,
    <BiWorld className="icon" />,
    <FaNetworkWired className="icon" />,
  ];
  return (
    <div className="at-your-service" id="services">
      <SectionTitle id="At Your Service" mainColor="blue" />
      <div className="service-all-card">
        <ServiceCard title={title[0]} subtitle={subtitle[0]} icon={icon[0]} />
        <ServiceCard title={title[1]} subtitle={subtitle[1]} icon={icon[1]} />
        <ServiceCard title={title[2]} subtitle={subtitle[2]} icon={icon[2]} />
      </div>
    </div>
  );
}
