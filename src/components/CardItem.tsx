import React from 'react'
import {Link} from 'react-router-dom'

const CardItem: React.FC = () => {
    return (
        <>
            <li className="card-item">
                <Link to= '/' className="card-item-link">
                    <figure className="card-item-pic-wrap">
                        <img src="/" alt="News Image" className="card-item-img"/>
                    </figure>
                    <div className="card-item-info">
                        <h5 className="card-item-text">
                        </h5>
                    </div>
                </Link>
            </li>
        </>
    )
}

export default CardItem

