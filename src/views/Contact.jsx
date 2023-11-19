import React from 'react'
import Header from '../components/header'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'
import img_mapLocation from '../assets/images/contactPage/map_crito.png'
import img_showcase_bkglines from '../assets/images/images-omni/background-lines.svg'
// import { PrimaryButton } from '../components/general/PrimaryButton'

import { Link } from 'react-router-dom'
import img_mapPointer from '../assets/images/contactPage/icon_mapmarker.svg'
import img_phone from '../assets/images/contactPage/icon_phone.svg'
import img_mail from '../assets/images/contactPage/icon_mail.svg'
import CustomCard from '../components/general/CustomCard'

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
        <div>
        </div>
      </div>
    
    </div>
    <div className='contactCards'>
      <div className='container'>
      <CustomCard
        imageUrl={img_mapPointer} // Change the URL to your image
        title="Visit us"
        text1="Sveavägen 31"
        text2="111 34 Stockholm"
      />
       <CustomCard
        imageUrl={img_phone} // Change the URL to your image
        title="Call us"
        text1="+46 (8) 121 470 50"
        text2="+46 (8) 121 470 51"
      />
       <CustomCard
        imageUrl={img_mail} // Change the URL to your image
        title="Email us"
        text1="info@crito.com"
        text2="support@crito.com"
      />
      </div>
    </div>
    <ContactForm/>
    <img className='map' src={img_mapLocation} alt="" />
    <Footer/>
    </>
  )
}

export default Contact