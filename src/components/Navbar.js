import React from "react";
import { Nav, Navbar, NavDropdown, NavLink } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import logo from "./spring net work page-01.png";
import Home from "./Home";
import AboutUs from "./AboutUs";
import AtYourService from "./AtYourService";
import OurWorks from "./OurWorks";
import TechWeWorkWith from "./TechWeWorkWith";
import ContactUs from "./ContactUs";

export default function OANavbar() {
  return (
    <div>
      <Navbar
        bg="navbar"
        variant="blue"
        fixed="top"
        expand="md"
        collapseOnSelect
      >
        <Navbar.Brand>
          <NavLink href="#home" className="brand-align">
            <img src={logo} height="50px" width="auto" />{" "}
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ml-auto h5" variant="pills">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about-us">About Us</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#our-works">Our Works</Nav.Link>
            <Nav.Link href="#cantact-us">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div className="content">
        <Home />
        <AboutUs />
        <br />
        <AtYourService />
        <br />
        <OurWorks />
        <br />
        <br />
        <br />
        <br />
        <TechWeWorkWith />
        <br /> <br /> <br /> <br />
        <ContactUs />
        <br /> <br /> <br /> <br />
        <div className="footer-div">
          <div className="footer-text">
            © Copyright Springnet Technologies All Rights Reserved.
          </div>
        </div>
      </div>
    </div>
  );
}
