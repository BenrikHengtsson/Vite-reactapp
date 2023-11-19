import React from 'react'
import Header from '../components/header'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'
import img_mapLocation from '../assets/images/contactPage/map_crito.png'
import img_showcase_bkglines from '../assets/images/images-omni/background-lines.svg'
// import { PrimaryButton } from '../components/general/PrimaryButton'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <>
    <Header/>
    <div className='contactTopicTop'>
      <div className='container sectionTitle centerContent'>
        <div className='wierdTopicMenu'>
          <div className='topLinks'>
      <Link  className='topicLinks'to="/">Home</Link>
              <Link className='topicLinksMain' to="/Contact">Contact</Link>
              </div>
        <h2>Let's Connect</h2>
        </div>
        <div className="showcaseLines">
          <img src={img_showcase_bkglines} alt=""/>
        </div>
      </div>
    
    </div>
    <ContactForm/>
    <img className='map' src={img_mapLocation} alt="" />
    <Footer/>
    </>
  )
}

export default Contact