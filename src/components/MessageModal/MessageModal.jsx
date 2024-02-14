import React from "react";
import successImg from "../assets/success.svg";
import "./MessageModal.css";
import closeButton from "../assets/close.png";

function MessageModal({ name, email, message, setState }) {
  return (
    <div className="contact-modal">
      <img
        className="closeModal"
        src={closeButton}
        alt="Close modal"
        onClick={() => setState(false)}
      />
      <img src={successImg} className="successImg" alt="success" />
      <h1>Thank you!</h1>
      <p>
        Hi {name}! Thank you for sending us the following message: "{message}".
        We will contact you back on the following email: "{email}"!
      </p>
    </div>
  );
}

export default MessageModal;
