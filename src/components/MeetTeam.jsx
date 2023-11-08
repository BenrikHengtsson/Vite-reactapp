import React from 'react'
import dot from '../assets/images/dot.svg'
import img_kristine from '../assets/images/images-omni/christina-wocintechchat-com-SJvDxw0azqw-unsplash.jpg'
import img_mark from '../assets/images/images-omni/itay-verchik-6ZKGBzrDd3I-unsplash.jpg'
import img_kimberly from '../assets/images/images-omni/christina-wocintechchat-com-Zpzf7TLj_gA-unsplash.jpg'
import img_justin from '../assets/images/images-omni/the-connected-narrative-N8lRH2uxih4-unsplash.jpg'

const MeetTeam = () => {
  return (
    <section className="meetOurteam">
        <div className="container">
          <div className="topSection">
            <div className="sectionTitle">
              <p>Meet Out Team</p>
              <h2>Experience Team Members</h2>
            </div>
            <div className="teamButton">
              <a className="btnPrimary" href="#"
              >Browse Team
              <i className="fa-solid fa-arrow-up-right-from-square"></i
            ></a>
            </div>
          </div>
          <div className="team">
            <div className="member">
              <img src={img_kristine} alt=""/>
              <div className="memberInfo">
                <h4>Kristine Palmer</h4>
                <p>Chef Operation Officer</p>
              </div>
            </div>
            <div className="member">
              <img src={img_mark} alt=""/>
              <div className="memberInfo">
                <h4>Mark Aubri</h4>
                <p>Senior Consultant</p>
              </div>
            </div>
            <div className="member">
              <img src={img_kimberly} alt=""/>
              <div className="memberInfo">
                <h4>Kimberly Hansen</h4>
                <p>Senior Consultant</p>
              </div>
            </div>
            <div className="member">
              <img src={img_justin} alt=""/>
              <div className="memberInfo">
                <h4>Justin Willoman</h4>
                <p>Senior Tech Consultant</p>
              </div>
            </div>
          </div>
          <div className="centerContent">
            <img className="unselectedBtn"src={dot} alt=""/>
            <img src={dot} alt=""/>
            <img className="unselectedBtn"src={dot} alt=""/>
            <img className="unselectedBtn"src={dot} alt=""/>
            <img className="unselectedBtn"src={dot} alt=""/>
          </div>
        </div>

      </section>
  )
}

export default MeetTeam