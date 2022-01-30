import React from "react";
import emailjs from "@emailjs/browser";
import $ from "jquery";
// import { useForm } from "react-hook-form";

//UNDO TO HERER //
function Contact() {
  const serviceID = "service_id";
  const templateID = "template_ID";
  const userID = "user_OpUxDY7fJBHxo03iPkcKc";

  var createModal = function () {
    $("#success-modal").show();
  };

  $("#send-email").on("click", function (e) {
    e.preventDefault();
    console.log("Hello");
    var emailObject = {
      name: $("#name").val(),
      phone: $("#phone").val(),
      email: $("#email").val(),
      description: $("#description").val(),
      subject: $("#subject").val(),
    };

    emailjs.send(serviceID, templateID, emailObject, userID).then(
      (result) => {
        console.log(result.text);

        createModal();
        $("#close-modal").on("click", function () {
          $("#name").val("");
          $("#phone").val("");
          $("#email").val("");
          $("#description").val("");
          $("#subject").val("");
          $("#success-modal").hide();
        });
      },
      (error) => {
        console.log(error.text);
      }
    );
  });

  return (
    <div className="contacts">
      <div className="text-center">
        <h1> contact me </h1>
        <p>
          {" "}
          Feel like getting in contact with me? Complete the form and ill be in
          touch!{" "}
        </p>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-6 col-xs-12">
            <div className="text-center">
              {/* <label for="name">Name</label> */}
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="name"
              />
              <div className="line"> </div>
            </div>
            <div className="text-center">
              {/* <label for="email">Email</label> */}
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="email"
              />
              <div className="line"> </div>
            </div>
            <div className="text-center">
              {/* <label for="email">Phone</label> */}
              <input
                type="phone"
                className="form-control"
                id="phone"
                placeholder="Contact Number"
              />
              <div className="line"> </div>
            </div>
            <div className="text-center">
              {/* <label for="email">Subject</label> */}
              <input
                type="subject"
                className="form-control"
                id="subject"
                placeholder="subject"
              />
              <div className="line"> </div>
            </div>
          </div>
          {/* main description */}
          <div className="col-md-6 col-xs-12">
            <div className="text-center">
              {/* <label for="description">Description</label> */}
              <textarea
                className="form-control"
                id="description"
                rows="4"
                placeholder="What do you wanan talk about?"
              ></textarea>
              <div className="line"> </div>
            </div>
            <button
              className="btn-main-offer contact-btn"
              id="send-email"
              // type="submit"
            >
              Submit
            </button>
          </div>
        </div>
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
