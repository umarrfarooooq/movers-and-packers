import AllServicesPage from '@/components/Services/AllServicesPage'
import Breadcrumb from '@/components/ui/Breadcrumb'
import React from 'react'

const Services = () => {
  return (
    <div>
      <Breadcrumb pageName="Services" pageTitle="OUR" pageTitleHighlight="SERVICES"/>
      <AllServicesPage />
    </div>
  )
}

export default Services
