import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
import {Button} from './Button'
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

    return (
      <>
        <div className="navbar">
          <div className="navbar-container">
            <Link to="/Games-Tech" className="navbar-logo">
              Games
              <span className="text-primary">Tech</span>
              {/* <img src="/videos/giphy.gif" className="gif-logo"/> */}
              <i className="fas fa-gamepad"></i>
            </Link>
            {/* click on the bar menu click it again it will hide and re */}
            <div className="menu-icon" onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
            {/* here is our navigation bar, if its active(true) show menu if not nothing */}
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                  <li className="nav-item">
                    {/* if you click on one of the items then let onClick go back to falsfe(hide)*/}
                    <Link to="/Games-Tech/home" className="nav-links" onClick={handleClick}>
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/Games-Tech/games" className="nav-links" onClick={handleClick}>
                      Games
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/Games-Tech/tech"
                      className="nav-links"
                      onClick={handleClick}
                    >
                      Technology
                    </Link>
                  </li>
                  {/* specifically for mobile hidden for desktop*/}
                  <li>
                    <Link
                      to="/Games-Tech/sign-up"
                      className="nav-links-mobile"
                      onClick={handleClick}
                    >
                      Sign Up
                    </Link>
                  </li>
                </ul>
                {/* nothing specified for onclick or type atm */}
                  <div className="btn-sign">{button && <Button buttonStyle="btn--outline">SIGN UP</Button>}</div>
          </div>
        </div>
      </>
    );
}

export default Navbar
