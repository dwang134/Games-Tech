import React from 'react'
import './Button.css'
import {Link} from 'react-router-dom'

const STYLES= ['btn--primary', 'btn--outline']

const SIZES= ['btn--medium', 'btn--large'];

interface Props{
    children?: string,
    type?: any,
    onClick?: any,
    buttonStyle?: any,
    buttonSize?: any
}

export const Button:React.FC<Props> = ({children, onClick,type, buttonStyle, buttonSize}) => {
    //check if it has a style if it does then keep it the way it is if not set to btn--primary
    const checkButtonStyles= STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    //you can also just write it in className but its cleaner
    const checkButtonSize= SIZES.includes(buttonSize) ? buttonSize : SIZES[0];


    return (
        <Link to= '/sign-up' className= 'btn-mobile'>
            {/* rendering whatever you passed in as the prop */}
            {/* two main className styles of the button */}
            <button className={`btn ${checkButtonStyles} ${checkButtonSize}`}
            onClick= {onClick}
            type= {type}
            >
                {children}
            </button>
        </Link>
    )
}

