import React, { useState } from "react";
import "./contactus.css";
import MessageModal from "../../components/MessageModal/MessageModal";

const ContactUs = () => {
  const [modal, setModal] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const saveForm = (event) => {
    event.preventDefault();
    setModal(true);
    console.log(
      event.target[0].value,
      event.target[1].value,
      event.target[2].value
    );
  };
  return (
    <div className="align-center">
      <h1>Contact Us</h1>
      <form id="contactus" className="contact-form" onSubmit={saveForm}>
        <label htmlFor="name">Full Name:</label>
        <input
          className="input"
          id="name"
          name="name"
          type="text"
          required
          onChange={(event) => setName(event.target.value)}
        />
        {name === "" ? (
          <p className="error" id="nameError">
            Please fill in your name.
          </p>
        ) : (
          ""
        )}

        <label htmlFor="email">Email Address:</label>
        <input
          className="input"
          id="email"
          name="email"
          type="email"
          required
          onChange={(event) => setEmail(event.target.value)}
        />
        {email === "" ? (
          <p className="error" id="emailError">
            Please fill in your email.
          </p>
        ) : (
          ""
        )}
        <label htmlFor="message">Your message:</label>
        <textarea
          id="message"
          name="message"
          required
          onChange={(event) => setMessage(event.target.value)}
        />
        {message === "" ? (
          <p className="error" id="messageError">
            Please fill in your message.
          </p>
        ) : (
          ""
        )}

        <button className="send" type="submit">
          Send
        </button>
      </form>
      {modal && (
        <MessageModal
          name={name}
          email={email}
          message={message}
          setState={setModal}
        />
      )}
    </div>
  );
};

export default ContactUs;
