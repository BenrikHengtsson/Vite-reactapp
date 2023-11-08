import React from 'react'
import img_article0 from '../assets/images/article-Image0.png'
import img_article1 from '../assets/images/article-Image1.png'
import img_article2 from '../assets/images/article-Image2.png'
import img_article3 from '../assets/images/article-Image3.png'

const ProjectCaseStudy = () => {
  return (
    <section className="projectAndcases">
        <div className="container">
          <div className="sectionTitle">
            <p>Project & Case Studies</p>
            <h2>Let's Looks Our Global Projects</h2>
          </div>

          <div className="projectAndCasesContent">
            <a className="project" href="#">
              <img
                src={img_article0}
                alt="Hands holding business paper" />
              <h3>Grow your business</h3>
              <div className="readMore">
                Read more <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </div>
            </a>
            <a className="project" href="#">
              <img
                src={img_article1}
                alt="Close up of Pink Apple Products" />
              <h3>Why your client needs a responsive website</h3>
              <div className="readMore">
                Read more <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </div>
            </a>
            <a className="project" href="#">
              <img src={img_article2} alt="Desk with supplies" />
              <h3>Educate your employees to get better results</h3>
              <div className="readMore">
                Read more <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </div>
            </a>
            <a className="project" href="#">
              <img
                src={img_article3}
                alt="Laptop with business intelligence" />
              <h3>Business insights is a important piece of your business</h3>
              <div className="readMore">
                Read more <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </div>
            </a>
          </div>

          <div className="centerContent">
            <a className="btnSecondaryBlack" href="#"
              >All Recent Projects
              <i className="fa-solid fa-arrow-up-right-from-square"></i
            ></a>
          </div>
        </div>
      </section>
  )
}

export default ProjectCaseStudy