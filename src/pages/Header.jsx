import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
      <>
        <div className="loader_bg">
         <div className="loader"><img src="images/loading.gif" alt="#" /></div>
          </div>
        <header>
         <div className="header">
            <div className="container">
               <div className="row">
                  <div className="col-xl-5 col-lg-5 col-md-9 col-sm-9">
                     <nav className="navigation navbar navbar-expand-md navbar-dark ">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarsExample04">
                           <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                   <NavLink to ='/' className='nav-link'> Home </NavLink>
                              </li>
                                <li className="nav-item">
                                <NavLink to ='/about' className='nav-link'> About </NavLink>
                              </li>
                                <li className="nav-item">
                                <NavLink to ='/service' className='nav-link'> Service </NavLink>
                                 
                              </li>
                                <li className="nav-item">
                                <NavLink to ='/customer' className='nav-link'> Customer </NavLink>
                              </li>
                                <li className="nav-item">
                                <NavLink to ='/contact' className='nav-link'> Contacte </NavLink>
                              </li>
                           </ul>
                        </div>
                     </nav>
                  </div>
                  <div className="col-xl-2 col-lg-2 col-md-3 col-sm-3 col logo_section">
                     <div className="full">
                        <div className="center-desk">
                           <div className="logo">
                              <a href="index.html"><img src="images/logo.png" alt="#" /></a>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5">
                     <ul className="email">
                        <li><a href="#">Call: (+71) 1234567890</a></li>
                        <li><a href="#">Email: demo@gmail.com</a></li>
                        <li><a href="#"><i className="fa fa-search" aria-hidden="true"></i></a></li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </header>
      </>
  )
}

export default Header