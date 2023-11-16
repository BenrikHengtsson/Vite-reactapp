import React from 'react'
import img_bkglines from '../assets/images/images-omni/background-lines-white-right.svg'
import icon_critowhite from '../assets/images/images-omni/logotype-white.svg'

const Footer = () => {
  return (
    <footer>
      <img className="bkgLines" src={img_bkglines} alt=""/>
      <div className="container">
        <div className="topMenufooter">
        <div className="critoInfo">
          <a href="#"> <img src={icon_critowhite} alt=""/></a> 
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, dolorum officia sed maiores consequatur repellat dolor. Rerum, ducimus quaerat corrupti distinctio accusantium velit iusto soluta? Accusantium distinctio officiis nesciunt saepe.</p>
        </div>
          
          <div className="menuSection">
            <h3>Company</h3>
            <a href="#">About</a>
            <a href="#">Features</a>
            <a href="#">Works</a>
            <a href="#">Career</a>
          </div>
          <div className="menuSection">
            <h3>Help</h3>
            <a href="#">Customer Support</a>
            <a href="#">Delivery Details</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Privacy Policy</a>
          </div>
          <div className="menuSection">
            <h3>Resources</h3>
            <a href="#">Free eBooks</a>
            <a href="#">Development Tutorial</a>
            <a href="#">How to - Blog</a>
            <a href="#">Youtube Playlist</a>
          </div>
          <div className="menuSection">
            <h3>Link</h3>
            <a href="#">Free eBooks</a>
            <a href="#">Development Tutorial</a>
            <a href="#">How to - Blog</a>
            <a href="#">Youtube Playlist</a>
          </div>
        </div>
      </div>
      <div className="footerBorder"></div>
      <div className="container">
        <div className="bottomInfo">
          <div className="copyright">
            <p>&copy; 2023 Crito - Consulting Company Inc. All Rights Reserved.</p>
          </div>
          <div className="socialMediabottom">
            <a href="https:facebook.com" target="_blank"
            ><i className="fa-brands fa-square-facebook"></i
          ></a>
          <a href="https:twitter.com" target="_blank"
            ><i className="fa-brands fa-x-twitter"></i
          ></a>
          <a href="https:instagram.com" target="_blank"
            ><i className="fa-brands fa-instagram"></i
          ></a>
          <a href="https:linkedin.com" target="_blank"
            ><i className="fa-brands fa-linkedin"></i
          ></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer