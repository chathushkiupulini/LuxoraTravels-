import React, { useEffect } from 'react';
import './home.css'; // You can use SCSS if you're using SCSS
import video from '../../Assets/video2.mp4';
import { GrLocation } from 'react-icons/gr';
import { HiFilter } from 'react-icons/hi';
import { TfiFacebook } from 'react-icons/tfi';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaTripadvisor } from 'react-icons/fa';
import { FaListAlt } from 'react-icons/fa';
import { TbAppsFilled } from 'react-icons/tb';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section className="home">
      <div className="overlay"></div>
      <video src={video} muted autoPlay loop type="video/mp4" className="video"></video>

      <div className="homeContent container">
        <div className="textDiv">
          <span data-aos="fade-up" className="smallText">Explore Our Packages</span>
          <h1 className="homeTitle">Find Your Dream Holiday</h1>
        </div>

        <div data-aos="fade-up" className="cardDiv grid">
          <div className="destinationInput">
            <label htmlFor="city">Search Destination:</label>
            <div className="input flex">
              <input type="text" placeholder="Enter name here..." />
              <GrLocation className="icon" />
            </div>
          </div>

          <div className="dateInput">
            <label htmlFor="date">Select Date:</label>
            <div className="input flex">
              <input type="date" />
            </div>
          </div>

          <div className="priceInput">
            <div className="labelTotal flex">
              <label htmlFor="price">Max Price:</label>
              <h3 className="total">$6000</h3>
            </div>
            <div className="input flex">
              <input type="range" max="6000" min="1000" />
            </div>
          </div>

          <div className="searchOption flex">
            <HiFilter className="icon" />
            <span>MORE FILTERS</span>
          </div>
        </div>

        <div data-aos="fade-up" className="homeFooterIcons flex">
          <div className="rightIcons">
            <TfiFacebook className="icon" />
            <FaInstagramSquare className="icon" />
            <FaTripadvisor className="icon" />
          </div>

          <div className="leftIcons">
            <FaListAlt className="icon" />
            <TbAppsFilled className="icon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
