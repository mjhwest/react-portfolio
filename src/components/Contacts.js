
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import $ from "jquery";
// import { useForm } from "react-hook-form";

//UNDO TO HERER //
function Contact() {
  const serviceID = "service_id";
  const templateID = "template_ID";
  const userID = "user_OpUxDY7fJBHxo03iPkcKc";

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form)
    emailjs.sendForm(serviceID, templateID, form.current, userID)
      .then((result) => {
          console.log(result.text);
          // createModal();
          $("#success-modal").show();
          $("#close-modal").on("click", function () {
            $("#name").val("");
            $("#phone").val("");
            $("#email").val("");
            $("#description").val("");
            $("#subject").val("");
            $("#success-modal").hide();
          });
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div id="contact" className="contacts">
      <div className="text-center">
        <h1> contact me </h1>
        <p>
          
          Feel like getting in contact with me? Complete the form and ill be in
          touch. 
        </p>
      </div>

      <div className="container">
        <form ref={form} onSubmit={sendEmail}>
          <div className="row">
            <div className="col-md-6 col-xs-12">
              <div className="text-center">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="name"
                  name="name"
                />
                <div className="line"> </div>
              </div>
              <div className="text-center">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="email"
                  name="email"
                />
                <div className="line"> </div>
              </div>
              <div className="text-center">
                <input
                  type="phone"
                  className="form-control"
                  id="phone"
                  placeholder="Contact Number"
                  name="phone"
                />
                <div className="line"> </div>
              </div>
              <div className="text-center">
                <input
                  type="subject"
                  className="form-control"
                  id="subject"
                  placeholder="subject"
                  name="subject"
                />
                <div className="line"> </div>
              </div>
            </div>
            {/* main description */}
            <div className="col-md-6 col-xs-12">
              <div className="text-center">
                <textarea
                  className="form-control"
                  id="description"
                  rows="4"
                  placeholder="What do you wanan talk about?"
                  name="description"
                ></textarea>
                <div className="line"> </div>
              </div>
              <input type="submit" className="btn-main-offer contact-btn" value="Send" />
            </div>
          </div>
        </form>
      </div>
      <div id="success-modal" className="custom-modal">
        <h1 className="success-heading pb-3">Thanks for your message!</h1>
        <p className="success-text pb-3">
          I will be in touch with you as soon as possible and we can chat about.
        </p>
        <button id="close-modal" className="btn btn-success px-5">
          Ok
        </button>
      </div>
    </div>
  );
}

export default Contact;
