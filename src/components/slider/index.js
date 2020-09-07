import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

import SliderImg from '../../image/sliderImg.jpeg'

import './index.scss'

const Slider = () => {

    return (
        <Carousel>
            <Carousel.Item>
                <img
                    src={SliderImg}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    src={SliderImg}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    )
}

export default Slider