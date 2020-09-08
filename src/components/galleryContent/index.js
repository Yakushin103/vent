import React, { useState, useEffect } from 'react'
import Button from '../button/index.js'
import TimeKeepers from '../timeKeeper/index'
import FooterLinks from '../footerLinks/index'
import ModalTime from '../modalTime/index'
import Slider from '../slider/index.js'
import CustomPicker from '../dataRangePicker/index'

import Essentials from '../../image/essential.png'
import Elevator from '../../image/elevator.png'
import SmartTV from '../../image/smartTV.png'
import WiFi from '../../image/wifi.png'
import Kettle from '../../image/kettle.png'
import DJ from '../../image/dj.png'


import './index.scss'

const dataJson = require("../../mock/data.json")

const GalleryContent = () => {
    const [show, setShow] = useState(false)
    const [timeStart, setTimeStart] = useState('12:00 am')
    const [timeEnd, setTimeEnd] = useState('5:00 pm')
    const [showTimeStart, setShowTimeStart] = useState(false)
    const [showTimeEnd, setShowTimeEnd] = useState(false)
    const [modalShow, setmodalShow] = useState(false)

    useEffect(() => {
        let newArr = dataJson.booking[0].freeTime
        let index = []
        let findIndex = dataJson.booking[0].freeTime && dataJson.booking[0].freeTime.map((item, i) => {
            if (item.timeStart === timeStart) {
                index = [i]
            }
            if (item.timeEnd === timeEnd) {
                index = [...index, i]
            }
        })

        let checkArr = newArr.slice(index[0], index[1]).filter(item => !item.free)
        checkArr.length > 0 ? setmodalShow(true) : setmodalShow(false)

    }, [timeStart, timeEnd])

    const handleStartTime = () => {
        setShowTimeStart(!showTimeStart)
        setShowTimeEnd(false)
    }

    const handleEndTime = () => {
        setShowTimeEnd(!showTimeEnd)
        setShowTimeStart(false)
    }

    const handleCancel = () => {
        setTimeStart('12:00 am')
        setTimeEnd('5:00 pm')
        setShowTimeStart(false)
        setShowTimeEnd(false)
    }

    const handleSubmit = (chooseArr) => {
        setTimeStart(chooseArr[0].timeStart)
        setTimeEnd(chooseArr[chooseArr.length - 1].timeEnd)
        setShowTimeStart(false)
        setShowTimeEnd(false)
    }
    const imgArr = [
        {
            "name": "Essentials",
            address: Essentials
        },
        {
            "name": "Elevator",
            address: Elevator
        },
        {
            "name": "SmartTV",
            address: SmartTV
        },
        {
            "name": "WiFi",
            address: WiFi
        },
        {
            "name": "Kettle",
            address: Kettle
        },
        {
            "name": "DJ",
            address: DJ
        }
    ]

    const findImg = (name) => {
        return imgArr.filter(item => item.name === name)
    }


    return (
        <>
            <div className='gallery-content'>
                {
                    dataJson.booking.map(item => (
                        item.id === '1' &&
                        <div key={item.id} className='content-items'>
                            <div className='content-item about'>
                                <div className='about-slider'>
                                    <Slider />
                                </div>
                                <div className='about-details'>
                                    <div className='about-details-name'>
                                        <h1>
                                            {item.name}
                                        </h1>
                                        <div className='links'>
                                            <div>
                                                <svg fill="#078089" stroke="#078089" strokeWidth="1" height="12pt" viewBox="-68 0 512 512" width="12pt"><path d="m187.644531 0c-103.46875 0-187.644531 84.175781-187.644531 187.644531 0 47.53125 29.949219 114.6875 89.019531 199.605469 43.175781 62.074219 85.640625 110.109375 87.429688 112.125l11.195312 12.625 11.199219-12.625c1.785156-2.015625 44.25-50.050781 87.429688-112.125 59.066406-84.917969 89.019531-152.074219 89.019531-199.605469 0-103.46875-84.179688-187.644531-187.648438-187.644531zm74.21875 369.914062c-29.183593 41.984376-58.679687 78.117188-74.21875 96.550782-15.5-18.382813-44.886719-54.378906-74.050781-96.308594-54.730469-78.679688-83.660156-141.792969-83.660156-182.511719 0-86.960937 70.75-157.710937 157.710937-157.710937 86.964844 0 157.710938 70.75 157.710938 157.710937 0 40.675781-28.871094 103.703125-83.492188 182.269531zm0 0"></path><path d="m187.644531 69.351562c-61.066406 0-110.746093 49.679688-110.746093 110.746094s49.679687 110.75 110.746093 110.75c61.070313 0 110.75-49.683594 110.75-110.75s-49.679687-110.746094-110.75-110.746094zm0 191.5625c-44.558593 0-80.8125-36.253906-80.8125-80.816406 0-44.558594 36.253907-80.8125 80.8125-80.8125 44.5625 0 80.816407 36.253906 80.816407 80.8125 0 44.5625-36.253907 80.816406-80.816407 80.816406zm0 0"></path></svg>
                                                <span>
                                                    {item.location}
                                                </span>
                                            </div>
                                            <div>
                                                <a href='#'>
                                                <svg viewBox="0 0 24 24" fill="currentColor" fillOpacity="0" stroke="#078089" strokeWidth="1.5" focusable="false" aria-hidden="true" role="presentation" strokeLinecap="round" strokeLinejoin="round" className="save-svg" width="16px" height="16px"><path d="m17.5 2.9c-2.1 0-4.1 1.3-5.4 2.8-1.6-1.6-3.8-3.2-6.2-2.7-1.5.2-2.9 1.2-3.6 2.6-2.3 4.1 1 8.3 3.9 11.1 1.4 1.3 2.8 2.5 4.3 3.6.4.3 1.1.9 1.6.9s1.2-.6 1.6-.9c3.2-2.3 6.6-5.1 8.2-8.8 1.5-3.4 0-8.6-4.4-8.6" strokeLinejoin="round"></path></svg>
                                                    Save</a>
                                            </div>
                                            <div>
                                                <a href='#'>
                                                <svg viewBox="0 0 24 24" fill="currentColor" fillOpacity="0" stroke="#078089" strokeWidth="1.5" focusable="false" aria-hidden="true" role="presentation" strokeLinecap="round" strokeLinejoin="round" className="share-svg" width="16px" height="16px"><g fillRule="evenodd"><path d="m11.5 16v-15"></path><path d="m7.5 4 4-3 4 3"></path><path d="m5.4 9.5h-3.9v14h20v-14h-3.1"></path></g></svg>
                                                 Share</a>
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
                                                item.amenities.length && item.amenities.map((item, i) => {
                                                    if (show) {
                                                        return <div key={item.id} className='amenities-item'>
                                                            <img src={findImg(item.name)[0].address} alt={item.name} />
                                                            {item.name}
                                                        </div>
                                                    } else if (i < 3) {
                                                        return <div key={item.id} className='amenities-item'>
                                                            <img src={findImg(item.name)[0].address} alt={item.name} />
                                                            {item.name}
                                                        </div>
                                                    }
                                                })
                                            }
                                        </div>
                                    </div>
                                    <div className='about-details-amenities'>
                                        <span className='title'>Special Features</span>
                                        <div className='row amenities-items'>
                                            {
                                                item.special.length && item.special.map(item => (
                                                    <div key={item.id} className='amenities-item'>
                                                        <img src={findImg(item.name)[0].address} alt={item.name} />
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
                                                        <img src={findImg(item.name)[0].address} alt={item.name} />
                                                        {item.name}
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='content-item price'>
                                {
                                    modalShow &&
                                    <ModalTime
                                        confirm={handleSubmit}
                                        cancel={handleCancel}
                                        data={item.freeTime}
                                    />
                                }
                                <div className='price-title'>
                                    <span>
                                        {item.price}
                                    </span>
                                </div>
                                <div className='price-items'>
                                    <div className='price-item'>
                                        <CustomPicker />
                                    </div>
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
                                    <div style={{ paddingBottom: '0' }} className='price-item footer'>
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
            <div className='prefooter'>
                <FooterLinks
                    data={dataJson.homeLinks}
                />
            </div>
        </>
    )
}

export default GalleryContent