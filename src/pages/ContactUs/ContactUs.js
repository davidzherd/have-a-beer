import React, { useEffect, useState } from "react";
import "./contactus.css";

const ContactUs = () => {
  const [modal, setModal] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [data, setData] = useState({ name: "", email: "", message: "" });

  const formValidation = (event) => {
    event.preventDefault();
    setData({
      name: `${event.target.name.value}`,
      email: `${event.target.email.value}`,
      message: `${event.target.message.value}`,
    });
  };
  useEffect(
    (e) => {
      const nameError = document.getElementById("nameError");
      const emailError = document.getElementById("emailError");
      const messageError = document.getElementById("messageError");
      if (data.name === "") {
        nameError.style.display = "flex";
      } else {
        nameError.style.display = "none";
      }
      if (data.email === "") {
        emailError.style.display = "flex";
      } else {
        emailError.style.display = "none";
      }
      if (data.message === "") {
        messageError.style.display = "flex";
      } else {
        messageError.style.display = "none";
      }
      if (data.name !== "" && data.email !== "" && data.message !== "") {
        console.log(data);
        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const message = document.getElementById("message");
        name.value = "";
        email.value = "";
        message.value = "";
      }
    },
    [data]
  );
  return (
    <div className="align-center">
      <h1>Contact Us</h1>
      <form id="contactus" className="contact-form" onSubmit={formValidation}>
        <label htmlFor="name">Full Name:</label>
        <input className="input" id="name" name="name" type="text" />
        <p className="error" id="nameError">
          Please fill in your name.
        </p>
        <label htmlFor="email">Email Address:</label>
        <input className="input" id="email" name="email" type="email" />
        <p className="error" id="emailError">
          Please fill in your email.
        </p>
        <label htmlFor="message">Your message:</label>
        <textarea id="message" name="message" />
        <p className="error" id="messageError">
          Please fill in your message.
        </p>
        <button className="send" type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
