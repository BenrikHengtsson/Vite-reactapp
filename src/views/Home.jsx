import React from 'react'
import Header from '../components/header'
import Showcase from '../components/Showcase'
import Sponsors from '../components/Sponsors'
import Features from '../components/Features'
import AboutCompany from '../components/AboutCompany'
import OurServices from '../components/OurServices'
import WhyChooseUs from '../components/WhyChooseUs'
import ProjectCaseStudy from '../components/ProjectCaseStudy'
import MeetTeam from '../components/MeetTeam'
import Testimonials from '../components/Testimonials'
import ArticleNews from '../components/ArticleNews'


const Home = () => {
  return (
    <>
    <Header />
    <Showcase />
    <Sponsors />
    <Features />
    <AboutCompany />
    <OurServices />
    <WhyChooseUs />
    <ProjectCaseStudy />
    <MeetTeam />
    <Testimonials />
    <ArticleNews />
    </>
    
  )
}

export default Home