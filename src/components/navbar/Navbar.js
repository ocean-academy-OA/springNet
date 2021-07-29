import React from "react";
import { Nav, Navbar, NavDropdown, NavLink } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
// import logo from "./spring net work page-01.png";
import logo from "./../images/logo/sn-01.svg";
import Home from "./../home/Home";
import AboutUs from "./../about/AboutUs";
import AtYourService from "./../service/AtYourService";
import OurWorks from "./../works/OurWorks";
import TechWeWorkWith from "./../tech/TechWeWorkWith";
import ContactUs from "./../contact/ContactUs";
import {
  TiSocialTwitter,
  TiSocialFacebook,
  TiSocialLinkedin,
} from "react-icons/ti";

export default function OANavbar() {
  return (
    <div>
      <div className="navbar-sty">
        <Navbar bg="navbar" variant="dark" expand="md" collapseOnSelect>
          <Navbar.Brand>
            <NavLink href="#home" className="">
              <img src={logo} width="auto" />{" "}
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="ml-auto h5 text-left " variant="pills">
              <Nav.Link href="#home" className="text-light">
                Home
              </Nav.Link>
              <Nav.Link href="#about-us" className="text-light">
                About Us
              </Nav.Link>
              <Nav.Link href="#services" className="text-light">
                Services
              </Nav.Link>
              <Nav.Link href="#our-works" className="text-light">
                Our Works
              </Nav.Link>
              <Nav.Link href="#cantact-us" className="text-light">
                Contact Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <div className="content">
        <Home />
        <AboutUs />

        <AtYourService />

        <OurWorks />

        <TechWeWorkWith />

        <ContactUs />

        <div className="footer-div">
          <div className="footer-text">
            <div> © Copyright Springnet Technologies All Rights Reserved.</div>
            <div className="links">
              <div className="social-media">
                <TiSocialFacebook className="social-icon" />

                <TiSocialTwitter className="social-icon" />

                <TiSocialLinkedin className="social-icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
