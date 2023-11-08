import React from 'react'
import img_bkg_lines from '../assets/images/images-omni/background-lines-right.svg'

const OurServices = () => {
  return (
    <section className="ourServices">
    <img className="bkgLines" src={img_bkg_lines} alt="" />

    <div className="container">
      <div className="sectionTitle">
        <p>About Services</p>
        <h2>We Provide The Best Service For Consulting</h2>
      </div>
      <div className="serviceCards">
        <a className="card1" href="#">
          <div className="line"></div>
          <h3>Business Advice</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem optio, quibusdam hic magnam provident quas voluptatibus.</p>
          <i className="fa-solid fa-arrow-right"></i>
        </a>
        <div className="card1">
          <div className="line"></div>
          <h3>Startup Business</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem optio, quibusdam hic magnam provident quas voluptatibus.</p>
          <i className="fa-solid fa-arrow-right"></i>
        </div>
        <div className="card1">
          <div className="line"></div>
          <h3>Financial Advice</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem optio, quibusdam hic magnam provident quas voluptatibus.</p>
          <i className="fa-solid fa-arrow-right"></i>
        </div>
        <div className="card1">
          <div className="line"></div>
          <h3>Risk Management</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem optio, quibusdam hic magnam provident quas voluptatibus.</p>
         <i className="fa-solid fa-arrow-right"></i>
          
        </div>
      </div>
      
      <div className="centerContent">
        <a className="btnPrimary" href="#"
          >Browse Services
          <i className="fa-solid fa-arrow-up-right-from-square"></i
        ></a>
      </div>
    </div>

  </section>
  )
}

export default OurServices