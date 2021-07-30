import React, { useEffect, useState } from "react";
import { Form, Col, Button, Row, InputGroup } from "react-bootstrap";
import firebase from "../../firebase";

import { Modal } from "react-bootstrap";
import ContactUs from "../contactus/ContactUs";
import ContactModel from "../ContactModel";
import { FiArrowDownCircle } from "react-icons/fi";
import GetQuote from "../contactus/GetQuot";
import Recaptcha from "react-recaptcha";
// 6Ld7fMwbAAAAAOcuJRg51D73MYRgL0ljduScjTyf

export default function Home() {
  const firestore = firebase.firestore();
  const [recaptcha, setRecaptcha] = useState(false);

  const [information, setInformation] = useState({
    name: "",
    email: "",
    address: "",
    phoneNumber: "",
    comment: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
  });

  const getInput = (e) => {
    let { name, value } = e.target;

    setInformation({ ...information, [name]: value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (recaptcha) {
      try {
        firestore.collection("springnet contact").add(information);
        setInformation({
          ...information,
          name: "",
          email: "",
          address: "",
          phoneNumber: "",
          comment: "",
          address2: "",
          city: "",
          state: "",
          zip: "",
        });

        setSmShow(false);
      } catch (e) {
        alert("somthing went wrong");
        console.log(e);
      }
    } else {
      alert("Please verify that you are a human!");
    }
  };
  function callback() {
    if (recaptcha) {
      setRecaptcha(false);
    }
  }
  function verifyCallback(respons) {
    if (respons) {
      setRecaptcha(true);
    }
  }
  const [smShow, setSmShow] = useState(false);
  function modalClose() {
    setInformation({
      ...information,
      name: "",
      email: "",
      address: "",
      phoneNumber: "",
      comment: "",
      address2: "",
      city: "",
      state: "",
      zip: "",
    });

    setSmShow(false);
  }
  return (
    <div className="home-container" id="home">
      <div className="opacity-bg">
        <div className="title">
          TAKE YOUR BUSINESS ONLINE WITH US. WE DEVELOP STYLISH WEB APP /
          FASTEST MOBILE APPS
        </div>
        <button className="button" onClick={() => setSmShow(true)}>
          Get Quote
        </button>
        <Modal
          size="lg"
          show={smShow}
          onHide={() => modalClose()}
          aria-labelledby="cantact-form"
        >
          <Modal.Header closeButton>
            <Modal.Title id="cantact-form">Get In Tuch</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* Get Quote */}

            <div>
              <div className="get-quote">
                <div className="form-div">
                  <Form onSubmit={onSubmit}>
                    <Row>
                      <Form.Group
                        as={Col}
                        controlId="formGridName"
                        hasValidation
                      >
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="FullName"
                          onChange={getInput}
                          name="name"
                          value={information.name}
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Please Enter Your Name.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Row>
                    <Row>
                      <Form.Group
                        as={Col}
                        controlId="formGridEmail"
                        hasValidation
                      >
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter email"
                          onChange={getInput}
                          name="email"
                          value={information.email}
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Invalid Email.
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group
                        as={Col}
                        controlId="formGridPhoneNumber"
                        hasValidation
                      >
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control
                          type="number"
                          placeholder="Phone Number"
                          onChange={getInput}
                          name="phoneNumber"
                          value={information.phoneNumber}
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Please Enter Your Phone Number
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Row>
                    <Form.Group
                      className="mb-3"
                      controlId="formGridAddress1"
                      hasValidation
                    >
                      <Form.Label>Address</Form.Label>
                      <Form.Control
                        placeholder="1234 Main St"
                        onChange={getInput}
                        name="address"
                        value={information.address}
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Address is Empty
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group
                      className="mb-3"
                      controlId="formGridAddress2"
                      hasValidation
                    >
                      <Form.Label>Address 2</Form.Label>
                      <Form.Control
                        placeholder="Apartment, studio, or floor"
                        onChange={getInput}
                        name="address2"
                        value={information.address2}
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Address is Empty
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Row>
                      <Form.Group
                        as={Col}
                        controlId="formGridCity"
                        hasValidation
                      >
                        <Form.Label>City</Form.Label>
                        <Form.Control
                          onChange={getInput}
                          name="city"
                          value={information.city}
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Enter your City
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        controlId="formGridState"
                        hasValidation
                      >
                        <Form.Label>State</Form.Label>
                        <Form.Control
                          onChange={getInput}
                          name="state"
                          value={information.state}
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Enter your State
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        controlId="formGridZip"
                        hasValidation
                      >
                        <Form.Label>Zip</Form.Label>
                        <Form.Control
                          onChange={getInput}
                          name="zip"
                          value={information.zip}
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Enter your Pincode
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Row>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                      hasValidation
                    >
                      <Form.Label>Comment</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        onChange={getInput}
                        name="comment"
                        value={information.comment}
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Enter your Comment
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Recaptcha
                      className="captcha-widget"
                      size="normal"
                      sitekey=" 6Ld7fMwbAAAAAOcuJRg51D73MYRgL0ljduScjTyf"
                      render="explicit"
                      onloadCallback={callback}
                      verifyCallback={verifyCallback}
                      badge="inline"
                    />

                    <Button
                      className="d-inline"
                      variant="primary"
                      type="submit"
                    >
                      Submit
                    </Button>
                  </Form>
                </div>
              </div>
            </div>

            {/* Get Quote */}
            {/* <GetQuote /> */}
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
}
