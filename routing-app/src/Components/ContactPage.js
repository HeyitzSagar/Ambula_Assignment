import React from "react";
import "./ForAllPage.css";
const ContactPage = () => {
  return (
    <div style={{ height: "110vh" }}>
      <h1 className="h1styles">Contact Me - Sagar Gupta</h1>

      <ul className="pstyles">
        <li>Email: sagargupta.gola@gmail.com</li>
        <li>Mobile: +916201348026</li>
        <li>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/sagar-gupta-8b2660172/"
            
          >
            linkedin
          </a>
        </li>
        <li>
          GitHub:{" "}
          <a href="https://github.com/HeyitzSagar" >
            github
          </a>
        </li>
        <li>
          Portfolio{" "}
          <a href="https://myportfolio11sagar.netlify.app/" >
            Portfolio
          </a>
        </li>
      </ul>
      <div className="form-styles">
        <h2>Feedback Form</h2>

        <form
            action="https://getform.io/f/e30eefe9-b385-44f8-9dbb-82209a2be3b0"
            method="POST"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
            ></textarea>

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
      </div>
    </div>
  );
};

export default ContactPage;
