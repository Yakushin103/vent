import React from 'react'
import Dropdown from '../dropdown/index'
import Logo from '../../image/logo.png'

import './index.scss'

const dataJson = require("../../mock/data.json")

const Header = () => {
    const login = dataJson.user

    return (
        <div className='header'>
            <div className='header-nav'>
                <div className='header-nav-left'>
                    <a href='#'>
                        <img src={Logo} alt='logo'></img>
                    </a>
                </div>
                <div className='header-nav-right'>
                    <div>
                        <a href='#' className='header-link'>
                            Referral Programm
                        </a>
                    </div>
                    <div>
                        <a href='#' className='header-link'>
                            Contact Us
                        </a>
                    </div>
                    <div>
                        {
                            !login ?
                                <div className='login'>
                                    <a href='#'>
                                        Sign in
                                    </a>
                                </div> :
                                <Dropdown />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header