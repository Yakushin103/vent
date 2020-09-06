import React from 'react'

import './index.scss'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-items'>
                <div style={{ width: '20%' }} className='footer-item'>
                    <span className='title'>About us</span>
                    <span className='line'></span>
                    <p className='text'>Our goal at VentVent is simple: to deliver WOW. Browse our catalog. We hope to be remembered, not only as a market place for venues but as a service company that brought happiness to our customers.</p>
                </div>
                <div style={{ width: '15%' }} className='footer-item'>
                    <span className='title'>Additional Linkss</span>
                    <span className='line'></span>
                    <ul>
                        <li>
                            <a href='#'>About</a>
                        </li>
                        <li>
                            <a href='#'>Term</a>
                        </li>
                        <li>
                            <a href='#'>Privacy policy</a>
                        </li>
                        <li>
                            <a href='#'>Referral</a>
                        </li>
                        <li>
                            <a href='#'>Program</a>
                        </li>
                        <li>
                            <a href='#'>Contact Us</a>
                        </li>
                        <li>
                            <a href='#'>FAQ</a>
                        </li>
                    </ul>
                </div>
                <div style={{ width: '15%' }} className='footer-item'>
                    <span className='title'>Host</span>
                    <span className='line'></span>
                    <ul>
                        <li>
                            <a href='#'>Host</a>
                        </li>
                        <li>
                            <a href='#'>Community</a>
                        </li>
                        <li>
                            <a href='#'>Host FAQ</a>
                        </li>
                        <li>
                            <a href='#'>Cancellation</a>
                        </li>
                        <li>
                            <a href='#'>policy</a>
                        </li>
                    </ul>
                </div>
                <div style={{ width: '15%' }} className='footer-item'>
                    <span className='title'>Guest</span>
                    <span className='line'></span>
                    <ul>
                        <li>
                            <a href='#'>Guest</a>
                        </li>
                        <li>
                            <a href='#'>Community</a>
                        </li>
                        <li>
                            <a href='#'>Guest FAQ</a>
                        </li>
                        <li>
                            <a href='#'>Open</a>
                        </li>
                        <li>
                            <a href='#'>Venues</a>
                        </li>
                        <li>
                            <a href='#'>New</a>
                        </li>
                        <li>
                            <a href='#'>Venues</a>
                        </li>
                        <li>
                            <a href='#'>Cancellation</a>
                        </li>
                        <li>
                            <a href='#'>policy</a>
                        </li>
                    </ul>
                </div>
                <div style={{ width: '25%' }} className='footer-item'>
                    <span className='title'>So what are you waiting for ? Contact for a Quick Quote</span>
                </div>
            </div>
        </div>
    )
}

export default Footer