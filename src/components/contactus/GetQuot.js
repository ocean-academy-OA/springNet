import React, { useEffect, useState } from "react";
import { Form, Col, Button, Row, InputGroup } from "react-bootstrap";
import firebase from "../../firebase";

export default function GetQuot() {
  const firestore = firebase.firestore();
  const [status, setStatus] = useState({
    color: "primary",
    buttonTitle: "Submit",
  });

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
    setStatus({ ...status, color: "primary", buttonTitle: "Submit" });
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
      address2: "",
      city: "",
      state: "",
      zip: "",
    });
    setStatus({ ...status, color: "success", buttonTitle: "Submited" });
  };

  return (
    <div>
      <div className="get-quote">
        <div className="form-div">
          <Form onSubmit={onSubmit}>
            <Row>
              <Form.Group as={Col} controlId="formGridName" hasValidation>
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
              <Form.Group as={Col} controlId="formGridEmail" hasValidation>
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
              <Form.Group as={Col} controlId="formGridCity" hasValidation>
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
              <Form.Group as={Col} controlId="formGridState" hasValidation>
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
              <Form.Group as={Col} controlId="formGridZip" hasValidation>
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
            <Button variant={status.color} type="submit">
              {status.buttonTitle}
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}
