import React, { useRef } from "react";
import emailjs, { init } from "@emailjs/browser";

const ContactForm = () => {
  init("miPzVfM0qyQ0Cn1MZ");
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_sxmtcej",
        "template_w4jit1n",
        form.current,
        "miPzVfM0qyQ0Cn1MZ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="contact-form">
      <div className="contact-title">
        <h1>Send us a message</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <form onSubmit={sendEmail} ref={form} action="">
        <input type="text" name="name" required placeholder="Your name" />
        <input type="email" name="email" required placeholder="Email" />
        <input type="text" name="subject" required placeholder="Subject" />
        <div className="textarea-container">
          <textarea
            name="comment"
            id=""
            cols="30"
            rows="10"
            placeholder="Comment"
          ></textarea>
        </div>
        <div className="btn-container">
          <button>Send</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
