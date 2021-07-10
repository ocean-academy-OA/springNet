import React from "react";
import SectionTitle from "../common/SectionTitle";
import ServiceCard from "./ServiceCard";
import {
  FaMobileAlt,
  FaNetworkWired,
  FaAndroid,
  FaConnectdevelop,
  FaCode,
} from "react-icons/fa";
import { AiFillAndroid } from "react-icons/ai";
import { GiPencilBrush } from "react-icons/gi";
import "./service.css";

export default function AtYourService() {
  const title = [
    "Mobile App Development",
    "Web App Development",
    "Hybrid Development",
    "UI/UX Design",
  ];
  const subtitle = [
    "Creating mobile applications for android platform using Android and Firebase.",
    "Creating Web application using HTML5, CSS3 and JS Frameworks.",
    "Creating incredible hybrid apps from simple to complex requirements Flutter Framework.",
    "Our UI/UX design is simplified the interaction between our clients’ target customers and their digital presence. Whether it is on a website, mobile application and desktop application, our designs offer a unique digital experience",
  ];
  const icon = [
    <AiFillAndroid />,
    <FaCode />,
    <FaConnectdevelop />,
    <GiPencilBrush />,
  ];
  return (
    <div className="at-your-service" id="services">
      <SectionTitle id="At Your Service" mainColor="blue" />
      <div className="service-all-card">
        <ServiceCard title={title[0]} subtitle={subtitle[0]} icon={icon[0]} />
        <ServiceCard title={title[1]} subtitle={subtitle[1]} icon={icon[1]} />
        <ServiceCard title={title[2]} subtitle={subtitle[2]} icon={icon[2]} />
        <ServiceCard title={title[3]} subtitle={subtitle[3]} icon={icon[3]} />
      </div>
    </div>
  );
}
