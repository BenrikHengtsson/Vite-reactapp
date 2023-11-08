import React from 'react'
import img_amy from '../assets/images/images-omni/amy-hirschi-K0c8ko3e6AA-unsplash.jpg'
import icon_thumb from '../assets/images/why/icon-thumb.svg'
import icon_penta from '../assets/images/why/icon-penta.svg'
import icon_pencil from '../assets/images/why/icon-pencil.svg'
import icon_head from '../assets/images/why/icon-head.svg'

const WhyChooseUs = () => {
  return (
    <section className="chooseUs">
        <div className="container">
          <div className="leftContent">
            <div className="sectionTitle">
              <p>Why Choose Us</p>
              <h2>Why We Are The Best Business Consulting Agency</h2>
              </div>
              <a className="objectLink" href="#">
                <img src={icon_thumb} alt=""/>
                <div className="infoTxt">
                <h3>Process Excellence</h3>
                <p>Lorem, ipsum dolor sit amet consectetur.</p>
              </div>
              </a>
              <a className="objectLink" href="#">
                <img src={icon_penta} alt=""/>
                <div className="infoTxt">
                <h3>Strategic Planning</h3>
                <p>Lorem, ipsum dolor sit amet consectetur.</p>
              </div>
              </a>
              <a className="objectLink" href="#">
                <img src={icon_pencil} alt=""/>
                <div className="infoTxt">
                <h3>Experience Design</h3>
                <p>Lorem, ipsum dolor sit amet consectetur.</p>
              </div>
              </a>
              <a className="objectLink" href="#">
                <img src={icon_head} alt=""/>
                <div className="infoTxt">
                <h3>Artificial Inteligence</h3>
                <p>Lorem, ipsum dolor sit amet consectetur.</p>
              </div>
              </a>
            </div>

            <div className="rightContent">
              <img src={img_amy} alt=""/>
              <div className="bkgBox"></div>
            </div>
          </div>
      </section>
  )
}

export default WhyChooseUs