import React from 'react'
import dot from '../assets/images/dot.svg'
import content1 from '../assets/images/images-omni/linkedin-sales-solutions-Mis5fyJi7Q0-unsplash.jpg'
import content2 from '../assets/images/images-omni/emiliano-vittoriosi-vEN1bsdSjxM-unsplash.jpg'
import content3 from '../assets/images/images-omni/kobu-agency-ipARHaxETRk-unsplash.jpg'

const ArticleNews = () => {
  return (
    <section className="articlesNews">
    <div className="container">
      <div className="topSection">
        <div className="sectionTitle">
          <p>Article & News</p>
          <h2>Get Every Single Articles & News</h2>
        </div>
        <div className="teamButton">
          <a className="btnPrimary" href="#"
          >Browse Services
          <i className="fa-solid fa-arrow-up-right-from-square"></i
        ></a>
        </div>
      </div>

      <div className="mainContent">

        <a href="#">
        <div className="contentCard">
          <div className="mediaDate">
            <img src={content1} alt=""/>
            <div className="calBox">
              <h5>25</h5>
              <p>Mar</p>
            </div>
          </div>
          <p id="newsCategory">Business</p>
          <h3>How To Use Digitalization In The Classroom</h3>
          <p id="txtContent">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Archtecto sed hic libero.</p>
        </div></a>

          <a href="">
        <div className="contentCard">
          <div className="mediaDate">
            <img src={content2} alt=""/>
            <div className="calBox">
              <h5>17</h5>
              <p>Mar</p>
            </div>
          </div>
          <p id="newsCategory">Business</p>
          <h3>How To Implement Chat GPT In Your Projects</h3>
          <p id="txtContent">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Archtecto sed hic libero.</p>
        </div>
      </a>

      <a href="">
        <div className="contentCard">
          <div className="mediaDate">
            <img src={content3} alt=""/>
            <div className="calBox">
              <h5>13</h5>
              <p>Mar</p>
            </div>
          </div>
          <p id="newsCategory">Business</p>
          <h3>The Guide To Support Modern CSS Design</h3>
          <p id="txtContent">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Archtecto sed hic libero.</p>
        </div>
      </a>
      </div>

      <div className="centerContent">
        <img src={dot} alt=""/>
        <img className="unselectedBtn" src={dot} alt=""/>
        <img className="unselectedBtn"src={dot} alt=""/>
        <img className="unselectedBtn"src={dot} alt=""/>
        <img className="unselectedBtn"src={dot} alt=""/>
      </div>
    </div>
  </section>
  )
}

export default ArticleNews