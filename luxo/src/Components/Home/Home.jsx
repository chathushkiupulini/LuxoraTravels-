import React, {useEffect} from 'react'
import './home.css'
import video from '../../Assets/vedio1.mp4'; 
// replace with exact filename
import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";
import { TfiFacebook } from "react-icons/tfi";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTripadvisor } from "react-icons/fa";
import { FaListAlt } from "react-icons/fa";
import { TbAppsFilled } from "react-icons/tb";

import AOS from 'aos'
import 'aos/dist/aos.css'



const Home = () => {
  //lets create a react hook to add a scroll animation...
  useEffect(()=>{
    AOS.init({duration:2000})
  },[]);
  return (
    
     <section className='home'>
      <div className='overlay'></div>
      <video src={video} muted autoPlay loop type ='video/mp4'></video>
      <div className='homeContent container'>
        <div className='textDiv'>

          
          <span data-AOS ="fade-up" className='smallText'>
            Our Packages 
          </span>

          <h1 className='homeTitle'>
            Search your Holiday
          </h1>

          </div>

        </div>
        <div  data-AOS ="fade-up"className="cardDiv grid">
          <div className="destinationInput">
            <label htmlFor='city'>Search your
               destination:</label>
               <div className='input flex'>
                <input type='text' placeholder='Enter name here...'></input>
                <GrLocation className = "icon"/>
                
               </div>
          </div>

          <div className="dateInput">
            <label htmlFor='date'>Select your date:</label>
               <div className='input flex'>
                <input type='date'/>
               </div>

               <div className="PriceInput">
              <div className="label_total flex">
                <label htmlFor="price">Max price:</label>
                <h3 className = "total">$6000</h3>
              </div>
              <div className="input flex">
                <input type='range' max= "6000"
                min="1000" />
              </div>
                
               </div>

               <div className="searchOption flex">
                <HiFilter className ="icon"/>
                <span>MORE FILTERS</span>
                </div>

          </div>

          </div>

          <div data-AOS ="fade-up" className="homeFooterIcons flex">
            <div className="rightIcons">
              <TfiFacebook className='icon'/>
              <FaSquareInstagram className='icon'/>
              <FaTripadvisor className='icon'/>
          </div>

          <div className="leftIcons">
             <FaListAlt className='icon'/>
              <TbAppsFilled className='icon'/>
            

          </div>
          </div>
        
      
     </section>
    
  
  )
}

export default Home
