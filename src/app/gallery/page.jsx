import { GalleryComponent } from '@/components/Gallery/Gallery'
import Breadcrumb from '@/components/ui/Breadcrumb'
import React from 'react'
const Gallery = () => {
  return (
    <div>
      <Breadcrumb pageName="Gallery" pageTitle="OUR" pageTitleHighlight="Gallery"/>
      <GalleryComponent />
      <div>
    </div>
    </div>
  )
}

export default Gallery
