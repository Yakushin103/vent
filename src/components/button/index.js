import React from 'react'

import './index.scss'

const Button = ({name, color}) => {

    return (
        <button className={color}>
            {name}
        </button>
    )
}

export default Button