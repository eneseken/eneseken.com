import React from "react";
import  { useState, useEffect } from 'react';
import "./styles/navBar.css"; // Import NavBar CSS file
import { FaAngleDown, FaAngleUp} from "react-icons/fa";
import "./Cursor"


const NavBar = () => {
  

  const [showShadow, setShowShadow] = useState(false);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setShowShadow(true);
      } else {
        setShowShadow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarStyle = {
    boxShadow: showShadow ? '0px 3px 20px rgba(28,33,41,.3)' : 'none',
  };



  return (
    <header>
    <nav className="navBar" style={navbarStyle}>

    <a className="site-logo" href="#home"><img src="images/logo.png" alt=""/></a>

      <ul className="nav-contents">
        <li><a href="#about"> About <span className="symbol">/&gt;</span></a> </li>
        <li><a href="#projects">Projects <span className="symbol">/&gt;</span></a> </li>
        <li onMouseEnter={toggleDropdown} onMouseLeave={closeDropdown} >
            More{" "}
            {isDropdownOpen ? (
              <FaAngleUp className="dropdown-icon" color='#8997A3' />
            ) : (
              <FaAngleDown className="dropdown-icon" color='#8997A3' />
            )}
            {isDropdownOpen && (
              <ul className="dropdown-menu">
                <li> <a href="#skills"> Skills <span className="symbol">/&gt;</span></a> </li>
                <li> <a href="#testimonials"> Testimonials <span className="symbol">/&gt;</span> </a> </li>
                <li> <a href="#contact"> Contact <span className="symbol">/&gt;</span></a> </li>
              </ul>
            )}
          </li>
      </ul>

    </nav>
    </header>

  );
};

export default NavBar;
