import React from 'react'
import stars from '../assets/images/5star.svg'
import img_cassandra from '../assets/images/images-omni/vince-veras-AJIqZDAUD7A-unsplash.jpg'
import img_amanda from '../assets/images/images-omni/christina-wocintechchat-com-PlikkWB79qs-unsplash.jpg'
import img_jack from '../assets/images/images-omni/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg'


const Testimonials = () => {
  return (
    <section className="testimonials">
        <div className="container custom-container">
          <div className="centerContent">
            <div className="sectionTitle">
              <p>Testimonial</p>
              <h2>What Our Client Says</h2>
            </div>
          </div>
          <div className="clientSection">
            <div className="client">
              <div className="star">
                <img src={stars} alt=""/>
              </div>
              <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
              <div className="avatarInfo">
                <img src={img_cassandra} alt=""/>
                <div className="avatarTitle">
                  <h4>Cassandra Warren</h4>
                  <div className="clientInfo">
                <p>Business Manager, Dorfus</p></div>
              </div>
              </div>
            </div>
            <div className="client">
              <div className="star">
                <img src={stars} alt=""/>
              </div>
              <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
              <div className="avatarInfo">
                <img src={img_amanda} alt=""/>
                <div className="avatarTitle">
                  <h4>Amanda Tulling</h4>
                  <div className="clientInfo">
                <p>Senior Developer, Square</p></div>
              </div>
              </div>
            </div>
            <div className="client">
              <div className="star">
                <img src={stars} alt=""/>
              </div>
              <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
              <div className="avatarInfo">
                <img id="jackAss" src={img_jack} alt=""/>
                <div className="avatarTitle">
                  <h4>Jack McDogglas</h4>
                  <div className="clientInfo">
                <p>Key Account Manager, Gobona</p></div>
              </div>
              </div>
            </div>
          </div>
          <div className="centerContent">
            <a id="paddingBtn" className="btnSecondaryBlack" href="#"
            >All Reviews
            <i className="fa-solid fa-arrow-up-right-from-square"></i
          ></a>
          </div>
        </div>
        <div className="bottomBox"></div>
      </section>
  )
}

export default Testimonials