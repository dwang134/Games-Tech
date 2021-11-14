import React from 'react'
import {Link} from 'react-router-dom'

interface Props{
    src: string;
    text: string;
    label: string;
    path: string;
}


const CardItem: React.FC<Props> = ({src, text, label, path}) => {
    return (
        <>
            <li className="card-item">
                <Link to= {path} className="card-item-link">
                    <figure className="card-item-pic-wrap" data-category= {label}>
                        <img src= {src} alt="News Image" className="card-item-img"/>
                    </figure>
                    <div className="card-item-info">
                        <h5 className="card-item-text">{text}
                        </h5>
                    </div>
                </Link>
            </li>
        </>
    )
}

export default CardItem

