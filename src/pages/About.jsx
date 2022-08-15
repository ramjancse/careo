import React from 'react'
import Footer from './Footer'
import Header from './Header'

function About() {
  return (
     <>
       <Header/> 
      <div id="about"  className="about">
         <div className="container">
            <div className="row">
               <div className="col-md-9">
                  <div className="titlepage">
                     <h2> <img src="images/head.h.png" alt="#"/> About Our Labspa</h2>
                     <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are </p>
                     <a className="read_more">Read More</a>
                  </div>
               </div>
            </div>
         </div>
        </div>
        <Footer/>
    </>
  )
}

export default About