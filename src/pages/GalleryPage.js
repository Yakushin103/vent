import React from 'react'
import Header from '../components/header/index'
// import Footer from '../components/footerLinks/index'
import GalleryContent from '../components/galleryContent/index'

const GalleryPage = () => {

    return (
        <div className='gallery'>
            <Header />
            <GalleryContent />
            {/* <div className='prefooter'>
                <Footer />
            </div> */}
        </div>
    )
}

export default GalleryPage