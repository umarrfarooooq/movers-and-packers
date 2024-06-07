import { ContactUs } from '@/components/Contact/ContactUs'
import Offices from '@/components/Our-Offices/Offices'
import Breadcrumb from '@/components/ui/Breadcrumb'
import React from 'react'

const Contact = () => {
  return (
    <div>
        <Breadcrumb pageName="Contact Us" pageTitle="CONTACT" pageTitleHighlight="US"/>
        <ContactUs />
        <Offices />
    </div>
  )
}

export default Contact
