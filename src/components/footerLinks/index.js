import React from 'react'

import PhoneImg from '../../image/phone.svg'
import EmailImg from '../../image/email.svg'
import LocationImg from '../../image/location.svg'
import InstaImg from '../../image/instagram.svg'
import YoutubeImg from '../../image/youtube.svg'
import TikTokImg from '../../image/tiktok.svg'

import './index.scss'

const FooterLinks = ({ data }) => {

    return (
        <div className='prefooter-links'>
            <div style={{ width: '60%' }} className='prefooter-links-items'>
                <div className='prefooter-links-item'>
                    <img src={PhoneImg} alt='phone' />
                    <span>
                        {data.api}
                    </span>
                </div>
                <div className='prefooter-links-item'>
                    <img src={EmailImg} alt='email' />
                    <span>
                        {data.email}
                    </span>
                </div>
                <div className='prefooter-links-item'>
                    <img src={LocationImg} alt='location' />
                    <span>
                        {data.addres}
                    </span>
                </div>
            </div>
            <div style={{ width: '30%', justifyContent: 'flex-end' }} className='prefooter-links-items social'>
                <div className='prefooter-links-item'>
                    <a href={data.instagram}>
                        <img src={InstaImg} alt='instagram' />
                    </a>
                </div>
                <div className='prefooter-links-item'>
                    <a href={data.youtube}>
                        <img src={YoutubeImg} alt='youtube' />
                    </a>
                </div>
                <div className='prefooter-links-item'>
                    <a href={data.tiktok}>
                        <img src={TikTokImg} alt='tiktok' />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default FooterLinks