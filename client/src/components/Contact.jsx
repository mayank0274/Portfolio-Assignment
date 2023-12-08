import React, { useState } from "react";
import axios from "axios";
import { Notyf } from "notyf";
import "notyf/notyf.min.css";

export const Contact = () => {
  const [messageCredentials, setmessageCredentials] = useState({
    name: "",
    subject: "",
    email: "",
    message: "",
  });

  //handle input function
  const handleInput = (e) => {
    setmessageCredentials({
      ...messageCredentials,
      [e.target.name]: e.target.value,
    });
  };

  // send message

  const sendMessage = async () => {
    try {
      const url = "https://formsubmit.co/ajax/sharma.mayank0274@gmail.com";
      const data = {
        name: messageCredentials.name,
        subject: messageCredentials.subject,
        email: messageCredentials.email,
        message: messageCredentials.message,
        _subject: messageCredentials.subject,
      };

      if (
        data.name == "" ||
        data.subject == "" ||
        data.email == "" ||
        data.message == ""
      ) {
        const errorAlert = new Notyf();
        errorAlert.error("All fields are required");
        return;
      }

      const response = await axios.post(url, data);
      const successAlert = new Notyf();
      successAlert.success(response.data.message);
    } catch (err) {
      const errorAlert = new Notyf();
      errorAlert.error(err.message);
    }
  };

  return (
    <>
      <h1 className="sectionHeading">Contact me</h1>
      <section className="contactusSec" id="contact">
        <div className="contact-text infoText">
          <div>
            <h1>Want to talk with me ?</h1>
            <p>Drop a message here</p>
            <h1>or</h1>
            <p>
              write me at : sharma[dot]mayank0274
              <br />
              [at]gmail[dot]com
            </p>
          </div>
        </div>

        <div className="contactForm">
          <form onSubmit={(e) => e.preventDefault()} autoComplete="off">
            <div>
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                name="name"
                required
                placeholder="John doe"
                onChange={handleInput}
                value={messageCredentials.name}
              />
            </div>

            <div>
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                name="email"
                required
                placeholder="jondoe@mail.com"
                onChange={handleInput}
                value={messageCredentials.email}
              />
            </div>

            <div>
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                name="subject"
                required
                placeholder="Enter Subject"
                onChange={handleInput}
                value={messageCredentials.subject}
              />

              <input
                type="hidden"
                name="_subject"
                value={messageCredentials.subject}
              />

              <input type="hidden" name="_template" value="box" />
            </div>

            <div>
              <label htmlFor="message">Your Message</label>
              <textarea
                name="message"
                id="message"
                required
                rows="5"
                placeholder="Enter your message"
                onChange={handleInput}
                value={messageCredentials.message}
              ></textarea>
            </div>
            <div>
              <button
                className="button"
                onClick={() => {
                  sendMessage();
                }}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};
