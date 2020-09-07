import React from 'react'

import './index.scss'

const Button = ({name, color, onClick}) => {

    return (
        <button onClick={onClick} className={color}>
            {name}
        </button>
    )
}

export default Button