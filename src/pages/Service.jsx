import React from 'react'

function Service() {
  return (
      <>
      <div id="service"  className="service">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="titlepage">
                     <h2> <img src="images/head.png" alt="#"/> Our Services</h2>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-md-4">
                  <div id="hover_chang" className="service_box">
                     <i><img src="images/thr.png" alt="#"/></i>
                     <h3>Cosmetic</h3>
                     <p>some form, by injected humour, or randomised words which don't look even slightly believable. If you are </p>
                  </div>
               </div>
               <div className="col-md-4">
                  <div id="hover_chang" className="service_box">
                     <i><img src="images/thr1.png" alt="#"/></i>
                     <h3>nails</h3>
                     <p>some form, by injected humour, or randomised words which don't look even slightly believable. If you are </p>
                  </div>
               </div>
               <div className="col-md-4">
                  <div id="hover_chang" className="service_box">
                     <i><img src="images/thr2.png" alt="#"/></i>
                     <h3>hairdressing</h3>
                     <p>some form, by injected humour, or randomised words which don't look even slightly believable. If you are </p>
                  </div>
               </div>
               <div className="col-md-12">
                  <a className="read_more" href="#">Read More</a>
               </div>
            </div>
         </div>
      </div>
      
      
      </>
  )
}

export default Service