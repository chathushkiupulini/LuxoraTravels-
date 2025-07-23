import React, { useState } from 'react';
import './navbar.scss';
import { MdOutlineTravelExplore } from 'react-icons/md';
import { AiFillCloseCircle } from 'react-icons/ai';
import { BiMenuAltRight } from 'react-icons/bi';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => setNavOpen(!navOpen);

  return (
    <header className="header">
      <div className="logo">
        <MdOutlineTravelExplore className="icon" />
        <h1>LUXO TRAVELS.</h1>
      </div>

      <nav className={`navBar ${navOpen ? 'activeNavbar' : ''}`}>
        <ul className="navLists">
          {['home', 'about', 'services', 'destinations', 'gallery', 'blog', 'contact'].map((section) => (
            <li className="navItem" key={section}>
              <a href={`#${section}`} className="navLink">
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
          <li className="navItem btn">
            <a href="#book" className="navLink">Book Now</a>
          </li>
        </ul>

        <AiFillCloseCircle className="icon closeNavbar" onClick={() => setNavOpen(false)} />
      </nav>

      <div className="toggleNavbar" onClick={toggleNav}>
        <BiMenuAltRight className="icon" />
      </div>
    </header>
  );
};

export default Navbar;
