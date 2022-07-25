import React from 'react'

function Customer() {
  return (
      <>
      <div id="customer" className="customer">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="titlepage">
                     <h2> <img src="images/head.png" alt="#"/> Our Customer Feedback</h2>
                  </div>
               </div>
            </div>
            <div id="myCarousel" className="carousel slide customer_Carousel " data-ride="carousel">
               <ol className="carousel-indicators">
                  <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                  <li data-target="#myCarousel" data-slide-to="1"></li>
                  <li data-target="#myCarousel" data-slide-to="2"></li>
               </ol>
               <div className="carousel-inner">
                  <div className="carousel-item active">
                     <div className="container">
                        <div className="carousel-caption ">
                           <div className="test_box">
                              <i><img src="images/tes.png" alt="#"/></i>
                              <h4>Rohali jonson</h4>
                              <span>customer</span>
                              <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined </p>
                              <img src="images/icon.png" alt="#"/>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="carousel-item">
                     <div className="container">
                        <div className="carousel-caption">
                           <div className="test_box">
                              <i><img src="images/tes.png" alt="#"/></i>
                              <h4>Rohali jonson</h4>
                              <span>customer</span>
                              <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined </p>
                              <img src="images/icon.png" alt="#"/>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="carousel-item">
                     <div className="container">
                        <div className="carousel-caption">
                           <div className="test_box">
                              <i><img src="images/tes.png" alt="#"/></i>
                              <h4>Rohali jonson</h4>
                              <span>customer</span>
                              <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined </p>
                              <img src="images/icon.png" alt="#"/>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
               <i className="fa fa-chevron-left" aria-hidden="true"></i>
               </a>
               <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
               <i className="fa fa-chevron-right" aria-hidden="true"></i>
               </a>
            </div>
         </div>
      </div>     
      </>
  )
}

export default Customer