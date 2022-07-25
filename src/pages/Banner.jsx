import React from 'react'

function Banner() {
  return (
      <>
      <section className="banner_main">
         <div id="banner1" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
               <li data-target="#banner1" data-slide-to="0" className="active"></li>
               <li data-target="#banner1" data-slide-to="1"></li>
               <li data-target="#banner1" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
               <div className="carousel-item active">
                  <div className="container-fluid">
                     <div className="carousel-caption">
                        <div className="row">
                           <div className="col-md-6">
                              <div className="text-bg">
                                 <span>Welcome to</span>
                                 <h1>labspa</h1>
                                 <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are </p>
                                 <a href="#">Read More </a> <a href="#">Book Now</a>
                              </div>
                           </div>
                           <div className="col-md-6">
                              <div className="text_img">
                                 <figure><img src="images/girl.png" alt="#"/></figure>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="carousel-item">
                  <div className="container-fluid">
                     <div className="carousel-caption">
                        <div className="row">
                           <div className="col-md-6">
                              <div className="text-bg">
                                 <span>Welcome to</span>
                                 <h1>labspa</h1>
                                 <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are </p>
                                 <a href="#">Read More </a> <a href="#">Book Now</a>
                              </div>
                           </div>
                           <div className="col-md-6">
                              <div className="text_img">
                                 <figure><img src="images/girl.png" alt="#"/></figure>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="carousel-item">
                  <div className="container-fluid">
                     <div className="carousel-caption">
                        <div className="row">
                           <div className="col-md-6">
                              <div className="text-bg">
                                 <span>Welcome to</span>
                                 <h1>labspa</h1>
                                 <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are </p>
                                 <a href="#">Read More </a> <a href="#">Book Now</a>
                              </div>
                           </div>
                           <div className="col-md-6">
                              <div className="text_img">
                                 <figure><img src="images/girl.png" alt="#"/></figure>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <a className="carousel-control-prev" href="#banner1" role="button" data-slide="prev">
            <i className="fa fa-long-arrow-left" aria-hidden="true"></i>
            </a>
            <a className="carousel-control-next" href="#banner1" role="button" data-slide="next">
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
         </div>
      </section>
      </>
  )
}

export default Banner