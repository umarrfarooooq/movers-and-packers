import AboutComponent from '@/components/AboutPage/AboutComponent'
import Offices from '@/components/Our-Offices/Offices'
import Breadcrumb from '@/components/ui/Breadcrumb'
import React from 'react'

const About = () => {
  return (
    <>
        <Breadcrumb pageName="About Us" pageTitle="ABOUT" pageTitleHighlight="US"/>
        <AboutComponent />
        <Offices />
    </>
  )
}

export default About
