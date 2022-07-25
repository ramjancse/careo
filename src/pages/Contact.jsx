import React from 'react'

function Contact() {
  return (
      <>
      <div id="contact" className="contact">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="titlepage">
                     <h2> <img src="images/head.h.png" alt="#"/> Request <span className="white"> A call Back</span></h2>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-md-6">
                  <form id="request" className="main_form">
                     <div className="row">
                        <div className="col-md-12 ">
                           <input className="contactus" placeholder="Name" type="type" name="Name"/> 
                        </div>
                        <div className="col-md-12">
                           <input className="contactus" placeholder="Email" type="type" name="Email"/> 
                        </div>
                        <div className="col-md-12">
                           <input className="contactus" placeholder="Phone Number" type="type" name="Phone Number"/>                          
                        </div>
                        <div className="col-md-12">
                           <textarea className="textarea" placeholder="Message" type="type" Message="Name">Message </textarea>
                        </div>
                        <div className="col-sm-col-xl-6 col-lg-6 col-md-6 col-sm-12">
                           <button className="send_btn">Send</button>
                        </div>
                     </div>
                  </form>
               </div>
               <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    
               </div>
            </div>
         </div>
      </div>
      
      </>
  )
}

export default Contact