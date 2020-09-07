import React, { useState } from 'react'
import Avater from '../../image/avatar.jpg'
import UpIcon from '../../image/upIcon.png'

import './index.scss'

const Dropdown = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false)

    const toggle = () => setDropdownOpen(!dropdownOpen);

    return (
        <div className='dropdown' onClick={toggle}>
            <div style={{ padding: '0' }} className='dropdown-avatar'>
                <img src={Avater} />
            </div>
            {
                dropdownOpen ?
                <img className='open' src={UpIcon} alt='up icon' /> :
                <img src={UpIcon} alt='up icon' />
                // <span className='open'>V</span> :
                // <span>V</span>
            }
            {
                dropdownOpen && (
                    <ul className='dropdown-menu'>
                        <li>
                            <a href='#'>My profile</a>
                        </li>
                        <li>
                            <a href='#'>Reservations</a>
                        </li>
                        <li>
                            <a href='#'>my balance</a>
                        </li>
                        <li>
                            <a href='#'>Reviews</a>
                        </li>
                        <li>
                            <a href='#'>Add venue</a>
                        </li>
                        <li styly={{ borderBottom: 'none' }}>
                            <a href='#'>Log out</a>
                        </li>
                    </ul>
                )
            }
        </div>
    )
}

export default Dropdown