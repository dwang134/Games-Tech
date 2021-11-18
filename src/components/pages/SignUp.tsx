import React from 'react'
import "../../App.css"
import "./Product.css"
import Form from '../Form'

const SignUp:React.FC = () => {
    return (
        <div className="sign-up">
           <div className="hero-container">
            <video src="../../../videos/anime.room.mp4" autoPlay muted></video>
               <h2 className="product-text">SIGN UP</h2> 
               <div className="form-container">
                   <Form />
               </div>
           </div>
        </div>
        
    )
}

export default SignUp;
