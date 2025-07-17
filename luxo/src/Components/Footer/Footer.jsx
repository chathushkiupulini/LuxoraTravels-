import React from 'react'
import './footer.css'
import video2 from '../../Assets/video2.mp4'
import { FiSend } from "react-icons/fi";
import { MdTravelExplore } from "react-icons/md";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai"
import { AiFillInstagram } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";


function Footer() {
    return (
        <section className='footer'>
            <div className="videoDiv">
                <video src={video2} loop autoPlay muted type ="video/mp4"></video> 
            </div>

            <div className="secContent container">
                <div className="contactDiv flex">
                    <div className='text'>
                        <small>KEEP IN TOUCH</small>
                        <h2>Travel with us</h2>
                    </div>

                    <div className="inputDiv flex">
                       <input type='text' placeholder='Enter Email Address'/>
                       <button className='btn flex' type='submit'>
                              SEND  <FiSend className='icon'/>
                        </button> 
                    </div>
                </div>

                <div className="footerCard flex">
                    <div className="footerIntro flex">
                        <div className="logoDiv">
                            <a href='#' className='logo flex'>
                                <MdTravelExplore className='icon'/>
                                LUXORA TRAVEL.
                            </a>
                        </div>

                        <div className="footerParagraph">
                            dgehifrf;oevjotr uv;htrbiogthbop kfjrjfo 
                            geufthi ncijtv jrtjggotjro mcrojvorjt nirhtv
                            brbvirti vntvrjvot vkotjbot votjj 
                        </div>

                        <div className="footerSocials">
                            <AiOutlineTwitter className='icon'/>
                            <AiFillYoutube className='icon'/>
                            <AiFillInstagram className='icon'/>
                            <FaTripadvisor className='icon'/>


                        </div>
                    </div>

                </div>
            </div>

                    
            


        </section>
    )
}

export default Footer
 