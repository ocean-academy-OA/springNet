import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import ContactUs from "./contactus/ContactUs";
export default function ContactModel({ isModel }) {
  const [shoModel, setSmShow] = useState({ showModel: false });

  return (
    <Modal
      size="lg"
      show={shoModel}
      onHide={() => setSmShow({ ...shoModel, showModel: !isModel })}
      aria-labelledby="cantact-form"
    >
      <Modal.Header closeButton>
        <Modal.Title id="cantact-form">Get In Tuch</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ContactUs />
      </Modal.Body>
    </Modal>
  );
}
