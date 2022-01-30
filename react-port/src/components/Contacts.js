import React from "react";
import emailjs from "@emailjs/browser";
import $ from "jquery";
// import {useForm} from "react-hook-form";

//UNDO TO HERER //
function Contact() {
  // export const Contact = () => {
  //    const form = useRef();

  //    const sendEmail = (e) => {
  //      e.preventDefault();

  //      emailjs.sendForm('service_ID', 'template_ID', form.current, 'user_OpUxDY7fJBHxo03iPkcKc')
  //        .then((result) => {
  //            console.log(result.text);
  //        }, (error) => {
  //            console.log(error.text);
  //        });
  //    };

  //    return (

  //       <div className="contacts">
  //        <div className="text-center">
  //        <h1> contact me </h1>
  //          <p> Feel like getting in contact with me? Complete the form and ill be in touch! </p>
  //        </div>
  //        <div className="container">
  //      <form ref={form} onSubmit={sendEmail}>
  //      <div className="row">
  //      <div className="col-md-6 col-xs-12">

  //         <div className ="text-center">
  //        <label>Name</label>
  //        <input type="text" name="user_name" placeholder="name" />
  //        <div className="line"> </div>
  //         </div>

  //         <div className ="text-center">
  //        <label>Phone Number</label>
  //        <input type="text" name="user_name" placeholder="Phone Number" />
  //        <div className="line"> </div>
  //         </div>

  //         <div className ="text-center">
  //        <label>Email</label>
  //        <input type="email" name="user_name" placeholder="email" />
  //        <div className="line"> </div>
  //         </div>

  //         <div className ="text-center">
  //        <label>Subject</label>
  //        <input type="text" name="user_name" placeholder="Subject" />
  //        <div className="line"> </div>
  //         </div>
  //        </div>

  //        <div className ="text-center">
  //        <label>Message</label>
  //        <textarea name="message" />
  //        <input type="submit" value="Send" placeholder="What do you wana talk about? " />
  //        </div>
  //        </div>
  //      </form>

  //      </div>
  //      </div>
  //    );
  //  };

  // const { register, handleSubmit, errors } = useForm();

  const serviceID = "service_id";
  const templateID = "template_ID";
  const userID = "user_OpUxDY7fJBHxo03iPkcKc";

  // const onSubmit = (data, r) => {
  //    sendEmail(serviceID, templateID,
  //       {
  //          name: data.name,
  //          phone: data.phone,
  //          email: data.email,
  //          subject: data.subject,
  //          description: data.description
  //       })
  // }

  $("#send-email").on("click", function (e) {
    console.log("Hello");
    e.preventDefault();
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
        alert("Message Sent");
      },
      (error) => {
        console.log(error.text);
      }
    );
  });

  // const sendEmail = (e) => {
  //    e.preventDefault();
  // var emailObject = {

  //    name: $("#user_name").val(),
  //    phone: $("#user_phone").val(),
  //    email: $("#user_email").val(),
  //    description: $("#user_text").val(),
  //    subject: $("#user_subject").val(),

  // }

  // emailjs.sendForm(serviceID, templateID, emailObject, userID)
  //   .then((result) => {
  //       console.log(result.text);
  //   }, (error) => {
  //       console.log(error.text);
  //   });
  //  };

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
                >

                </textarea>
                <div className="line"> </div>
              </div>
              <button className="btn-main-offer contact-btn" id="send-email">
                Submit
              </button>
          
          
          </div> 
        </div>
      </div>
    </div>
  );
}

export default Contact;
