import React, { useState } from 'react'

import './index.scss'

const dataJson = require("../../mock/data.json")

const GalleryContent = () => {
    const [show, setShow] = useState(false)

    return (
        <div className='gallery-content'>
            {
                dataJson.booking.map(item => (
                    item.id === '1' &&
                    <div key={item.id} className='content-items'>
                        <div className='content-item about'>
                            <div className='about-slider'>slider</div>
                            <div className='about-details'>
                                <div className='about-details-name'>
                                    <h1>
                                        {item.name}
                                    </h1>
                                    <div className='links'>
                                        <div>
                                            <span>
                                                {item.location}
                                            </span>
                                        </div>
                                        <div>
                                            <a href='#'>Save</a>
                                        </div>
                                        <div>
                                            <a href='#'>Share</a>
                                        </div>
                                    </div>
                                </div>
                                <div className='about-details-amenities'>
                                    <div style={{ alignItems: 'center' }} className='row'>
                                        <span className='title'>Amenities</span>
                                        <span onClick={() => setShow(!show)} className='show'>
                                            {
                                                item.amenities.length && show ? `Show the first 3 of ${item.amenities.length} amenities` :
                                                    `Show all ${item.amenities.length} amenities`
                                            }
                                        </span>
                                    </div>
                                    <div className='row amenities-items'>
                                        {
                                            item.amenities.length && item.amenities.map((item, i) => (
                                                show ?
                                                    <div key={item.id} className='amenities-item'>
                                                        {item.name}
                                                    </div> :
                                                    i < 3 &&
                                                    <div key={item.id} className='amenities-item'>
                                                        {item.name}
                                                    </div>
                                            ))
                                        }
                                    </div>
                                </div>
                                <div className='about-details-amenities'>
                                    <span className='title'>Special Features</span>
                                    <div className='row amenities-items'>
                                        {
                                            item.special.length && item.special.map(item => (
                                                <div key={item.id} className='amenities-item'>
                                                    {item.name}
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                                <div className='about-details-amenities'>
                                    <span className='title'>Place Details</span>
                                    <div className='about-text'>
                                        <p>
                                            {item.place}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='content-item price'>2</div>
                    </div>
                ))
            }

        </div>
    )
}

export default GalleryContent