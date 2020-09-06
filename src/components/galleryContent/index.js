import React, { useState, useEffect } from 'react'
import Button from '../button/index.js'
import TimeKeepers from '../timeKeeper/index'

import './index.scss'

const dataJson = require("../../mock/data.json")

const GalleryContent = () => {
    const [show, setShow] = useState(false)
    const [timeStart, setTimeStart] = useState('12:00am')
    const [timeEnd, setTimeEnd] = useState('12:00pm')
    const [showTimeStart, setShowTimeStart] = useState(false)
    const [showTimeEnd, setShowTimeEnd] = useState(false)

    const handleStartTime = () => {
        setShowTimeStart(!showTimeStart)
        setShowTimeEnd(false)
    }

    const handleEndTime = () => {
        setShowTimeEnd(!showTimeEnd)
        setShowTimeStart(false)
    }


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
                                        {/* {
                                            item.amenities.length && item.amenities.map((item, i) => (
                                                show ?
                                                <div key={item.id} className='amenities-item'>
                                                    {item.name}
                                                </div> :
                                                 (i < 3) &&
                                                <div key={item.id} className='amenities-item'>
                                                    {item.name}
                                                </div>
                                            ))
                                        } */}
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
                                <div className='about-details-amenities'>
                                    <span className='title'>Rules</span>
                                    <div className='row amenities-items'>
                                        {
                                            item.rules && item.rules.length && item.rules.map(item => (
                                                <div key={item.id} className='amenities-item'>
                                                    {item.name}
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='content-item price'>
                            <div className='price-title'>
                                <span>
                                    {item.price}
                                </span>
                            </div>
                            <div className='price-items'>
                                <div className='price-item'>Date</div>
                                <div className='price-item times'>
                                    <div className='time'>
                                        <span className='label'>start time</span>
                                        <div
                                            onClick={handleStartTime}
                                            className='time-show'
                                        >
                                            <span>{timeStart}</span>
                                            <span>v</span>
                                        </div>
                                        <TimeKeepers
                                            time={timeStart}
                                            setTime={setTimeStart}
                                            showTime={showTimeStart}
                                            setShowTime={setShowTimeStart}
                                        />
                                    </div>
                                    <div className='time'>
                                        <span className='label'>end time</span>
                                        <div
                                            onClick={handleEndTime}
                                            className='time-show'
                                        >
                                            <span>{timeEnd}</span>
                                            <span>v</span>
                                        </div>
                                        <TimeKeepers
                                            time={timeEnd}
                                            setTime={setTimeEnd}
                                            showTime={showTimeEnd}
                                            setShowTime={setShowTimeEnd}
                                        />
                                    </div>
                                </div>
                                <div className='price-item'>
                                    <span className='label'>
                                        People Range
                                    </span>
                                    <select>
                                        {
                                            item.range.length && item.range.map(number => (
                                                <option className='select-option' key={number.id}> {number.people} </option>
                                            ))
                                        }
                                    </select>
                                    <textarea placeholder='Your message here'></textarea>
                                </div>
                                <div className='price-item button'>
                                    <Button
                                        name='Request to book'
                                        color='blue'
                                    />
                                    <span>Cancel for free within 24 hours</span>
                                </div>
                                <div className='price-item footer'>
                                    <Button
                                        name='Ask user review'
                                        color='white'
                                    />
                                    <Button
                                        name='Ask host review'
                                        color='white'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }

        </div>
    )
}

export default GalleryContent