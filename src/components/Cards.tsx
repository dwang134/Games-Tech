import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
const Cards = () => {
    return (
        <div className= 'card'>
            <h1>Checkout the latest news!</h1>
            <div className="card-container">
                <div className="card-wrapper">
                    <ul className="card-items">
                        <CardItem />
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default Cards
