import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { ImLocation2 } from "react-icons/im";
import { GrMail } from "react-icons/gr";
import { FaMobileAlt } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.css";
import "./contactUs.css";

import firebase from "../../firebase";
export default function ContactUs() {
  const firestore = firebase.firestore();
  const [information, setInformation] = useState({
    name: "",
    email: "",
    address: "",
    phoneNumber: "",
    comment: "",
  });

  // useEffect(() => {
  //   getData();
  // }, []);

  // async function getData() {
  //   const data = await firestore.collection("springnet contact");
  //   data.onSnapshot((querySnapshot) => {
  //     querySnapshot.forEach((element) => {
  //       console.log(element.data());
  //     });
  //   });
  // }
  const getInput = (e) => {
    let { name, value } = e.target;
    setInformation({ ...information, [name]: value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(information);
    firestore.collection("springnet contact").add(information);
    setInformation({
      ...information,
      name: "",
      email: "",
      address: "",
      phoneNumber: "",
      comment: "",
    });
  };

  return (
    <Container className="contact-us-form">
      <Row>
        <Col md={5} className="mb-3 ">
          <Container className="our-info">
            <div className="our-info-title  text-center">Contact Us</div>
            <div className="our-content">
              <Col className="our-details">
                <div className="our-icon">
                  <ImLocation2 />
                </div>
                <div className="addres">
                  No. 2, Karuvadikuppam Main Rd, near GINGER HOTEL, Senthamarai
                  Nagar, Muthialpet, Puducherry, 605003
                </div>
              </Col>
              <Col className="our-details">
                <div className="our-icon">
                  <GrMail />
                </div>
                <div className="addres">info@springnet.in</div>
              </Col>
              <Col className="our-details">
                <div className="our-icon">
                  <FaMobileAlt />
                </div>
                <div className="addres">0413-2238675</div>
              </Col>
            </div>
          </Container>
        </Col>
        <Col md={7} className="">
          <Container className="user-info text-left">
            <Form onSubmit={onSubmit}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                {/* <Form.Label>Fullname</Form.Label> */}
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Fullname"
                  value={information.name}
                  onChange={getInput}
                  required
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                {/* <Form.Label>Email</Form.Label> */}
                <Form.Control
                  type="email"
                  placeholder="Email Adderss"
                  name="email"
                  value={information.email}
                  onChange={getInput}
                  required
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                {/* <Form.Label>Address</Form.Label> */}
                <Form.Control
                  type="text"
                  placeholder="Address"
                  name="address"
                  value={information.address}
                  onChange={getInput}
                  required
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  type="number"
                  placeholder="Phone Number"
                  name="phoneNumber"
                  value={information.phoneNumber}
                  onChange={getInput}
                  required
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="comment"
                  placeholder="Your comment"
                  value={information.comment}
                  onChange={getInput}
                  required
                />
              </Form.Group>
              <div>
                <input
                  type="submit"
                  className="btn btn-primary mybtn"
                  value="Submit"
                />
              </div>
            </Form>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}
