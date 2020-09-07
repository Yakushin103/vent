import React, { useState } from 'react'
import Button from '../button/index'

import './index.scss'

const ModalTime = ({ data, cancel, confirm }) => {
    const [changeTime, setChangeTime] = useState([])

    const chooseTime = (id) => {
        let findTime = data.map((item, i) => {
            if (item.id === id) {
                if (changeTime.length === 0) {
                    setChangeTime([i])
                } else {
                    changeTime[0] === i ? setChangeTime([]) : setChangeTime([changeTime.sort((a, b) => a - b)[0], i].sort((a, b) => a - b))
                }
            }
        })
    }

    const chooseArr = () => {
        if (changeTime.length === 1) {
            return data.filter((item, i) => i === changeTime[0])
        } else if (changeTime.length > 1) {
            return data.slice(changeTime[0], changeTime[1] + 1)
        } else {
            return []
        }
    }

    const newArr = (id) => {
        if (chooseArr().length) {
            let checkArr = chooseArr().filter(item => item.id === id)
            return checkArr.length ? true : false
        } else {
            return false
        }
    }

    return (
        <div className='modal-time'>
            <div className='modal-time-header'>
                <span className='title'>Select a time</span>
            </div>
            <div className='modal-time-items'>
                {
                    data.map((item, i) => (
                        item.free ?
                            <div
                                key={i}
                                className={
                                    newArr(item.id) ? 'modal-time-item free-time active' : 'modal-time-item free-time'
                                }
                                onClick={() => chooseTime(item.id)}
                            >
                                <span>
                                    {item.timeStart}
                                </span>
                            </div> :
                            <div
                                key={i}
                                className='modal-time-item'
                            >
                                <span>
                                    {item.timeStart}
                                </span>
                            </div>
                    ))
                }
            </div>
            <div className='footer'>
                <Button
                    name='confirm'
                    color='white'
                    onClick={() => confirm(chooseArr())}
                />
                <Button
                    name='cancel'
                    color='white'
                    onClick={cancel}
                />
            </div>
        </div>
    )
}

export default ModalTime