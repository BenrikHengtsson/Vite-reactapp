import React from 'react'
import icon_handshake from '../assets/images/features/icon-handshake.svg'
import icon_bulb from '../assets/images/features/icon-bulb.svg'
import icon_stocks from '../assets/images/features/icon-stocks.svg'
import icon_cogbox from '../assets/images/features/icon-cogbox.svg'

const Features = () => {
  return (
    <section className="features">
    <div className="container">
      <div className="sectionTitle">
        <p>Features</p>
        <h2>Our Accounting is trusted by thousand of companies</h2>
        <a className="btnPrimary" href="#"
          >Learn More <i className="fa-solid fa-arrow-up-right-from-square"></i
        ></a>
      </div>

      <div className="rightContent">
        <div className="infoPlate-1">
          <img src={icon_handshake} alt="" />
          <h3>Business Advice</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="infoPlate-1">
          <img src={icon_bulb} alt="" />
          <h3>Startup Business</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="infoPlate-1">
          <img src={icon_stocks} alt="" />
          <h3>Financial Advice</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="infoPlate-1">
          <img src={icon_cogbox} alt="" />
          <h3>Risk Management</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Features