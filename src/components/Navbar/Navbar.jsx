import React, { useState } from 'react';
import './Navbar.css';
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from 'react-icons/md'
import images from '../../constants/images'

const Navbar = () => {

  const [menuToggle, setMenuToggle] = useState(false)

  return (
    <nav className='app__navbar'>
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="gericht" />
      </div>

      <ul className='app__navbar-links'>
        <li className='p__opensans'><a href="#home">Home</a></li>
        <li className='p__opensans'><a href="#about">About us</a></li>
        <li className='p__opensans'><a href="#menu">Menu</a></li>
        <li className='p__opensans'><a href="#contact">Contact Us</a></li>
      </ul>

      <div className="app__navbar-login">
        <a href="#login" className='p__opensans'>LogIn / Register</a>
        <div />
        <a href="/" className='p__opensans'>Book Table</a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu className='app__navbar-smallscreen-GiHamburgerMenu' color='#fff' fontSize={27} onClick={() => setMenuToggle(true)} />

        {menuToggle && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu className='overlay__close' onClick={() => setMenuToggle(false)} fontSize={27} />
            <ul className='app__navbar-smallscreen-links'>
              <li className='p__opensans'><a href="#home">Home</a></li>
              <li className='p__opensans'><a href="#about">About us</a></li>
              <li className='p__opensans'><a href="#menu">Menu</a></li>
              <li className='p__opensans'><a href="#contact">Contact Us</a></li>
            </ul>
          </div>
        )}

      </div>
    </nav>
  )
};
export default Navbar;