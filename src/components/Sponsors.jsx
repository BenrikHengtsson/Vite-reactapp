import React from 'react'
import img_paperz from '../assets/images/sponsors/paperz-logo.svg'
import img_dorfus from '../assets/images/sponsors/dorfus-logo.svg'
import img_martino from '../assets/images/sponsors/martino-logo.svg'
import img_square from '../assets/images/sponsors/square-logo.svg'
import img_gobana from '../assets/images/sponsors/gobana-logo.svg'

const Sponsors = () => {
  return (
    <section className="sponsors">
    <div className="container">
      <div className="logos">
        <img id="spons1" src={img_paperz} alt="" />
        <img id="spons2" src={img_dorfus} alt="" />
        <img id="spons3" src={img_martino} alt="" />
        <img id="spons4" src={img_square} alt="" />
        <img id="spons5" src={img_gobana} alt="" />
      </div>
    </div>
  </section>
  )
}

export default Sponsors