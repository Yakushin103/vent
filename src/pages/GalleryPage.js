import React from 'react'
import Header from '../components/header/index'
import Footer from '../components/footer/index'
import GalleryContent from '../components/galleryContent/index'

const GalleryPage = () => {

    return (
        <div className='gallery'>
            <Header />
            <GalleryContent />
            <Footer />
        </div>
    )
}

export default GalleryPage