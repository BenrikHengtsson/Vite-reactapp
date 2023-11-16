import React from 'react'
import { NavLink } from 'react-router-dom'
import img_logo from '../assets/images/logo.svg'



const header = () => {
  return (
    <header>
      <div className="container">
        <a href="index.html"
          ><img src={img_logo} alt="Crito Logotype"
        /></a>
        <button className="menuBars"><i className="fa-solid fa-bars"></i></button>
        <div className="menu">
          {/* <!-- solida ikoner fanns enbart i gratis version --> */}
          <div className="topMenu">
            <div className="contactInformation">
              <div className="contentBox">
                <i className="fa-solid fa-phone-volume"></i>
                +46 (8) 121 470 50
              </div>
              <div className="contentBox">
                <i className="fa-solid fa-envelope"></i> info@crito.com
              </div>
              <div className="contentBox last">
                <i className="fa-solid fa-location-dot"></i> Sveavägen 31, 111 34
                STOCKHOLM
              </div>
            </div>

            <div className="socialMedia">
              <a href="https:facebook.com" target="_blank"
                ><i className="fa-brands fa-square-facebook"></i
              ></a>
              <a href="https:twitter.com" target="_blank"
                ><i className="fa-brands fa-x-twitter"></i
              ></a>
              <a href="https:instagram.com" target="_blank"
                ><i className="fa-brands fa-instagram"></i
              ></a>
              <a href="https:NavLinkedin.com" target="_blank"
                ><i className="fa-brands fa-NavLinkedin"></i
              ></a>
            </div>
          </div>

          <div className="mainMenu">
            <nav>
            {/* <NavLink to="/" className="active"> */}
            <NavLink to="/">
                Home
              </NavLink>
              <NavLink to="/services">Services</NavLink>
              <NavLink to="/news">News</NavLink>
              <NavLink to="/Contact">Contact</NavLink>
            </nav>

            <a className="btnLogin" href="#"
              >Login <i className="fa-solid fa-arrow-up-right-from-square"></i
            ></a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default header