import React from "react";

function Contact() {
  return (
      
      <div className="contacts">
         <div className="text-center">
      <h1> contact me </h1>
      <p> Feel like getting in contact with me? Complete the form and ill be in touch! </p>
     </div>

   <div className="container">
      <div className="row">
      <div className="col-md-6 col-xs-12">
               {/*NAME INPUT FIELD*/}
               <div className="text-center">
               <input 
      
               type="text"
               className="form-control"
               placeholder="Name"
               name="name"
               />
               <div className="line"> </div>
               </div>
               {/*PHONE NUMBER INPUT FIELD*/}
               <div className="text-center">
               <input 
            
               text="text"
               className="form-control"
               placeholder="Phone Number"
               name="phone"
               />
                      <div className="line"> </div>
                      </div>
               {/*EMAIL INPUT FIELD*/}
               <div className="text-center">
               <input 
             
               type="email"
               className="form-control"
               placeholder="Email"
               name="email"
               />
                      <div className="line"> </div>
                      </div>
               {/*SUBJECT INPUT FIELD*/}
               <div className="text-center">
               <input 

               type="text"
               className="form-control"
               placeholder="Subject"
               name="subject"
               />
                      <div className="line"> </div>
            </div> 
            </div>
            <div className="col-md-6 col-xs-12">
            {/*DESCRIPTION*/}
            <div className="text-center">
            <textarea 
            type="text"
               className="form-control"
               placeholder="What do you wana talk about?"
               name="subject"
               /> 
                      <div className="line"> </div>
                      </div>
               <button className="btn-main-offer contact-btn" type="submit"> contact me </button>
            </div>
         </div>
      </div>
  </div>






  )
}

export default Contact;
