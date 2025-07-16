import React, { useState } from 'react';
import './navbar.scss'; // Use .css if you're not using SCSS
import { MdOutlineTravelExplore } from 'react-icons/md';
import { AiFillCloseCircle } from 'react-icons/ai';
import { BiMenuAltRight } from 'react-icons/bi';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const openNav = () => setNavOpen(true);
  const closeNav = () => setNavOpen(false);

  return (
    <header className="header">
      <div className="logo">
        <MdOutlineTravelExplore className="icon" />
        <h1>DUDU BUBU Travels</h1>
      </div>

      <nav className={`navBar ${navOpen ? 'activeNavbar' : ''}`}>
        <ul className="navLists">
          <li className="navItem">
            <a href="/#" className="navLink">Home</a>
          </li>
          <li className="navItem">
            <a href="/#about" className="navLink">About</a>
          </li>
          <li className="navItem">
            <a href="/#services" className="navLink">Services</a>
          </li>
          <li className="navItem">
            <a href="/#destinations" className="navLink">Destinations</a>
          </li>
          <li className="navItem">
            <a href="/#gallery" className="navLink">Gallery</a>
          </li>
          <li className="navItem">
            <a href="/#blog" className="navLink">Blog</a>
          </li>
          <li className="navItem">
            <a href="/#contact" className="navLink">Contact</a>
          </li>
          <li className="navItem btn">
            <a href="/#book" className="navLink">Book Now</a>
          </li>
        </ul>

        <AiFillCloseCircle className="icon closeNavbar" onClick={closeNav} />
      </nav>

      <div className="toggleNavbar" onClick={openNav}>
        <BiMenuAltRight className="icon" />
      </div>
    </header>
  );
};

export default Navbar;
