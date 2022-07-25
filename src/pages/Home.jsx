import React from 'react'
import About from './About'
import Banner from './Banner'
import Contact from './Contact'
import Customer from './Customer'
import Footer from './Footer'
import Header from './Header'
import Service from './Service'

function Home() {
  return (
    <>
        <Header />
        <Banner />
        <Service />
        <About />
        <Customer />
        <Contact />
        <Footer/>
    </>
  )
}

export default Home