import React, { useEffect } from 'react';
import './home.scss';
import video from '../../Assets/video1.mp4';
import { GrLocation } from 'react-icons/gr';
import { HiFilter } from 'react-icons/hi';
import { TfiFacebook } from 'react-icons/tfi';
import { FaInstagramSquare, FaTripadvisor, FaListAlt } from 'react-icons/fa';
import { TbAppsFilled } from 'react-icons/tb';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section className="home">
      <div className="videoWrapper">
        <video src={video} muted autoPlay loop type="video/mp4" className="video" />
        <div className="overlay"></div>

        <div className="heroText" data-aos="fade-up">
          <h1>Plan Your Trip With LUXO</h1>
          <p>Your World of Luxury Awaits</p>
          <button className="exploreBtn">Register Now</button>
        </div>
      </div>

      <div className="homeContent container" data-aos="fade-up">
        <div className="cardDiv grid">
          <div className="destinationInput">
            <label htmlFor="city">Location</label>
            <div className="input flex">
              <input type="text" placeholder="Dream Destination" />
              <GrLocation className="icon" />
            </div>
          </div>

          <div className="dateInput">
            <label htmlFor="date">Date</label>
            <div className="input flex">
              <input type="date" />
            </div>
          </div>

          <div className="priceInput">
            <label htmlFor="price">Price Range</label>
            <div className="input flex">
              <input type="range" min="100" max="6000" />
              <h4>$140 - $500</h4>
            </div>
          </div>

          <div className="searchOption flex">
            <HiFilter className="icon" />
            <span>Search</span>
          </div>
        </div>

        <div className="homeFooterIcons flex" data-aos="fade-up">
          <div className="rightIcons flex">
            <TfiFacebook className="icon" />
            <FaInstagramSquare className="icon" />
            <FaTripadvisor className="icon" />
          </div>
          <div className="leftIcons flex">
            <FaListAlt className="icon" />
            <TbAppsFilled className="icon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
