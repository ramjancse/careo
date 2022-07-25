import React from 'react'

function Footer() {
  return (
      <>
      <footer id="contact">
         <div className="footer">
            <div className="container">
               <div className="row">
                  <div className="col-md-8 offset-md-4">
                     <form className="bottom_form">
                        <h3>Newsletter</h3>
                        <input className="enter" placeholder="Enter your email" type="text" name="Enter your email"/>
                        <button className="sub_btn">subscribe</button>
                     </form>
                  </div>
               </div>
               <div className="row">
                  <div className="col-xl-6 col-md-12">
                     <div className="row">
                        <div className="col-md-7 padd_bottom">
                           <div className="heading3">
                              <a href="#"><img src="images/logo1.png" alt="#"/></a>
                              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.</p>
                           </div>
                        </div>
                        <div className="col-md-5 padd_bottom padd_bott">
                           <div className="heading3">
                              <h3>Contact Us</h3>
                              <ul className="infometion">
                                 <li><a href="#">Donec odio. Quisque </a></li>
                                 <li><a href="#">volutpat mattis</a></li>
                                 <li><a href="#">eros.Lorem ipsum dolor</a></li>
                                 <li><a href="#">sit amet, consectetuer  </a></li>
                                 <li><a href="#">adipiscing elit. Donec  </a></li>
                                 <li><a href="#">odio. Quisque volutpat </a></li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-6 col-md-12">
                     <div className="row">
                        <div className="col-md-6 offset-md-1 padd_bottom">
                           <div className="heading3">
                              <h3>INFORMATION</h3>
                              <ul className="infometion">
                                 <li><a href="#">Donec odio. Quisque </a></li>
                                 <li><a href="#">volutpat mattis</a></li>
                                 <li><a href="#">eros.Lorem ipsum dolor</a></li>
                                 <li><a href="#">sit amet, consectetuer  </a></li>
                                 <li><a href="#">adipiscing elit. Donec  </a></li>
                                 <li><a href="#">odio. Quisque volutpat </a></li>
                              </ul>
                           </div>
                        </div>
                        <div className="col-md-5">
                           <div className="heading3">
                              <h3>MY ACCOUNT</h3>
                              <ul className="infometion">
                                 <li><a href="#">Donec odio. Quisque </a></li>
                                 <li><a href="#">volutpat mattis</a></li>
                                 <li><a href="#">eros.Lorem ipsum dolor</a></li>
                                 <li><a href="#">sit amet, consectetuer  </a></li>
                                 <li><a href="#">adipiscing elit. Donec  </a></li>
                                 <li><a href="#">odio. Quisque volutpat </a></li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="copyright">
               <div className="container">
                  <div className="row">
                     <div className="col-md-12">
                        <p>© 2022 All Rights Reserved. <a href="#"> Free  html Templates</a></p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </footer>

      </>
  )
}

export default Footer