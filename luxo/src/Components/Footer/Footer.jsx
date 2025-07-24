// Footer.jsx
import React from 'react';
import './footer.scss';
import video2 from '../../Assets/video3.mp4';
import { MdTravelExplore } from 'react-icons/md';
import { AiOutlineTwitter, AiFillYoutube, AiFillInstagram } from 'react-icons/ai';
import { FaTripadvisor } from 'react-icons/fa';
import { FiSend, FiChevronRight } from 'react-icons/fi';

const Footer = () => {
  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video2} loop autoPlay muted type="video/mp4"></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>

          <div className="inputDiv flex">
            <input type="text" placeholder="chathuhki@gmail.com" />
            <button className="btn flex">
              SEND <FiSend className="icon" />
            </button>
          </div>
        </div>

        <div className="footerCard grid">
          {/* Left Column */}
          <div className="footerIntro">
            <div className="logoDiv">
              <a href="#" className="logo flex">
                <MdTravelExplore className="icon" />
                LUXO TRAVELS.
              </a>
            </div>
            <p>
              Discover the world with LUXO TRAVELS.  your trusted partner in unforgettable journeys. 
              From iconic cities to hidden gems, we ensure comfort, care, and adventure in every trip.
            </p>
            <div className="footerSocials flex">
              <AiOutlineTwitter className="icon" />
              <AiFillYoutube className="icon" />
              <AiFillInstagram className="icon" />
              <FaTripadvisor className="icon" />
            </div>
          </div>

          {/* Middle Columns */}
          <div className="footerLinks grid">
            <div className="linkGroup">
              <span className="groupTitle">OUR AGENCY</span>
              <li className="footerList flex"><FiChevronRight className="icon" /> Services</li>
              <li className="footerList flex"><FiChevronRight className="icon" /> Insurance</li>
              <li className="footerList flex"><FiChevronRight className="icon" /> Agency</li>
              <li className="footerList flex"><FiChevronRight className="icon" /> Tourism</li>
              <li className="footerList flex"><FiChevronRight className="icon" /> Payment</li>
            </div>

            <div className="linkGroup">
              <span className="groupTitle">PARTNERS</span>
              <li className="footerList flex"><FiChevronRight className="icon" /> Booking</li>
              <li className="footerList flex"><FiChevronRight className="icon" /> RentalCar</li>
              <li className="footerList flex"><FiChevronRight className="icon" /> HostelWorld</li>
              <li className="footerList flex"><FiChevronRight className="icon" /> Trivago</li>
              <li className="footerList flex"><FiChevronRight className="icon" /> TripAdvisor</li>
            </div>

            <div className="linkGroup">
              <span className="groupTitle">LAST MINUTE</span>
              <li className="footerList flex"><FiChevronRight className="icon" /> London</li>
              <li className="footerList flex"><FiChevronRight className="icon" /> California</li>
              <li className="footerList flex"><FiChevronRight className="icon" /> Indonesia</li>
              <li className="footerList flex"><FiChevronRight className="icon" /> Europe</li>
              <li className="footerList flex"><FiChevronRight className="icon" /> Oceania</li>
            </div>
          </div>
        </div>

        <div className="footerBottom flex">
          <small>BEST TRAVEL WEBSITE THEME</small>
          <small>COPYRIGHTS RESERVED © ISRATECH 2025</small>
        </div>
      </div>
    </section>
  );
};

export default Footer;
