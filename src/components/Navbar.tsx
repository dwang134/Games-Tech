import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import Button from './Button';
import './Navbar.css'

const Navbar: React.FC = () => {

    const [click, setClick]= useState(false);

    const [button, setButton]= useState(true);

    const handleClick = () =>{
        // setClick(true); you dont want to set this to true or else wont revert
        setClick(!click);
    }

    const showButton= () => {
        // once it gets too small hide it
        if (window.innerWidth <= 960){
            setButton(false);
        }else{
            setButton(true);
        }
    }

    // whenever the window gets resized then call the showButton function
    window.addEventListener('resize', showButton);

    useEffect(() => {
        showButton();
    },[]);

    return(
        <>
            <div className="navbar">
                <div className="navbar-container">
                    <Link to="/" className= "navbar-logo">
                        Games
                        <span className= "text-primary">Tech</span>
                        <i className="fas fa-gamepad"></i>
                    </Link>
                    {/* click on the bar menu click it again it will hide and re */}
                    <div className="menu-icon" onClick={handleClick}>
                        <i className= {click? 'fas fa-times': 'fas fa-bars'}></i>
                    </div>
                    {/* here is our navigation bar, if its active(true) show menu if not nothing */}
                    <ul className={click? 'nav-menu active' : 'nav-menu'}>
                        <li className= 'nav-item'>
                        {/* if you click on one of the items then let onClick go back to false(hide)*/}
                            <Link to= '/home' className= "nav-links" onClick={handleClick}>Home</Link>
                        </li>
                        <li className= 'nav-item'>
                            <Link to= '/games' className= "nav-links" onClick={handleClick}>Games</Link>
                        </li>
                        <li className= 'nav-item'>
                            <Link to= '/technology' className= "nav-links" onClick={handleClick}>Technology</Link>
                        </li>
                        {/* specifically for mobile hidden for desktop*/}
                        <li>
                            <Link to= '/sign-up' className= "nav-links-mobile" onClick={handleClick}>Sign Up</Link>
                        </li>
                    </ul>
                    {/* nothing specified for onclick or type atm */}
                    {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
                </div>
            </div>
        </>
    )
}

export default Navbar
