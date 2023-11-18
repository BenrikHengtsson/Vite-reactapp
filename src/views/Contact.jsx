import React from 'react'
import Header from '../components/header'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'
import img_mapLocation from '../assets/images/contactPage/map_crito.png'
import { PrimaryButton } from '../components/general/PrimaryButton'
import { NavLink } from 'react-router-dom'

const Contact = () => {
  return (
    <>
    <Header/>
    <div className='contactTopicTop'>
      <div className='container sectionTitle centerContent'>
        <div className='wierdTopicMenu'>
          <div className='topLinks'>
      <NavLink  className='topicLinks'to="/">Home</NavLink>
              <NavLink className='topicLinks' to="/Contact">Contact</NavLink>
              </div>
        <h2>Let's Connect</h2>
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