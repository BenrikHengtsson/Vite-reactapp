import React from 'react'
import img_daria from '../assets/images/images-omni/daria-pimkina-tYaccl19A3Q-unsplash.jpg'

const AboutCompany = () => {
  return (
    <section className="aboutCompany">
        <div className="container">
          <div className="founderSection">
            <div className="imageFrame">
            <img
              src={img_daria}
              alt="" /></div>
            <div className="founderInfo">
              <span className="name">Samantha Brown, </span>
              <span className="title">Founder</span>

              <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit."</p>
            </div>
          </div>
          <div className="aboutRightcolumn">
          <div className="sectionTitle">
            <p>About Company</p>
            <h2>We Are Business Consulting & Credit Repair Experts</h2>
            </div>
            <div className="aboutSection">
              <span className="info1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              deserunt cumque voluptatum a, cupiditate numquam expedita, amet,
              corporis tempora ullam laudantium facere doloribus accusamus</span>
              <span className="info2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid dignissimos sapiente reiciendis, asperiores molestiae cumque labore sit tempora deserunt aperiam quaerat consequatur eaque velit ipsum quos aut maiores at repudiandae!</span>
            </div>
            <div className="aboutButtons">
            <a className="btnSecondaryBlack" href="#"
              >Learn More <i className="fa-solid fa-arrow-up-right-from-square"></i
            ></a>
            <div className="playBtn">
              <i className="fa-solid fa-play"></i>
              <p>intro Video</p> 
              {/* ngt knepigt, kommer inte ihåg om texten ej va klickbar i original, känns som ett konstigt val, får fixa med LINK eller ngt sen */}
            </div>
          </div>
          </div>
            </div>
      </section>
  )
}

export default AboutCompany