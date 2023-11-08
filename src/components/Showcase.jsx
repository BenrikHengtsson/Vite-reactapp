import React from 'react'
import img_showcase_man from '../assets/images/showcase.png'
import img_showcase_bkglines from '../assets/images/images-omni/background-lines.svg'

const Showcase = () => {
  return (
    <section className="showcase">
        <div className="showcaseLines">
          <img src={img_showcase_bkglines} alt=""/>
        </div>
        <div className="container">
          <div className="content">
            <h1>We Provide The Best Business Solutions</h1>
            <p>
              Establish your vision and value proposition and turn them into
              testable prototypes
            </p>
            <a className="btnPrimary" href="#"
              >Get Consulting
              <i className="fa-solid fa-arrow-up-right-from-square"></i
            ></a>
            <a className="btnSecondary" href="#"
              >Learn More <i className="fa-solid fa-arrow-up-right-from-square"></i
            ></a>
          </div>
          {/* <!-- Mannen ville inte följa med via figpea i Svg, funkar i png bara. --> */}
          <img src={img_showcase_man} alt="A man in suit with tablet" />
        </div>
      </section>
  )
}

export default Showcase