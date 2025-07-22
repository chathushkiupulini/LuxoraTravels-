
import './footer.scss'
import video2 from '../../Assets/video2.mp4'
import { FiSend } from "react-icons/fi";
import { MdTravelExplore } from "react-icons/md";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai"
import { AiFillInstagram } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


function Footer() {

    //lets create a react hook to add a scroll animation...
      useEffect(()=>{
        AOS.init({duration:2000})
      },[]);

    return (
        <section className='footer'>
            <div className="videoDiv">
                <video src={video2} loop autoPlay muted type ="video/mp4"></video> 
            </div>

            <div className="secContent container">
                <div className="contactDiv flex">
                    <div  data-AOS ="fade-up" className='text'>
                        <small>KEEP IN TOUCH</small>
                        <h2>Travel with us</h2>
                    </div>

                    <div className="inputDiv flex">
                       <input  data-AOS ="fade-up" type='text' placeholder='Enter Email Address'/>
                       <button  data-AOS ="fade-up" className='btn flex' type='submit'>
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

                        <div data-AOS ="fade-up" className="footerParagraph">
                            dgehifrf;oevjotr uv;htrbiogthbop kfjrjfo 
                            geufthi ncijtv jrtjggotjro mcrojvorjt nirhtv
                            brbvirti vntvrjvot vkotjbot votjj 
                        </div>

                        <div data-AOS ="fade-up" className="footerSocials">
                            <AiOutlineTwitter className='icon'/>
                            <AiFillYoutube className='icon'/>
                            <AiFillInstagram className='icon'/>
                            <FaTripadvisor className='icon'/>


                        </div>
                    </div>

                 

                    <div className="footerLinks grid">

                         {/*Group one*/}
                        <div data-AOS ="fade-up" data-AOS-duration ="3000" className="linkGroup">
                            <span className='groupTitle'>
                                OUR AGENCY
                            </span>

                            <li className="footerList flex">
                                <FiChevronRight className='icon'/>
                                Services
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className='icon'/>
                                Insurance
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className='icon'/>
                                Agency
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className='icon'/>
                                Tourism
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className='icon'/>
                                Payment
                            </li>
                        </div>

                         {/*Group two*/}
                        <div data-AOS ="fade-up" 
                        data-AOS-duration ="4000" 
                        className="linkGroup">
                            <span className='groupTitle'>
                                LAST MINUTE
                            </span>

                            <li className="footerList flex">
                                <FiChevronRight className='icon'/>
                                London
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className='icon'/>
                                California
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className='icon'/>
                                Indonesia
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className='icon'/>
                                Europe
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className='icon'/>
                                Oceania
                            </li>
                        </div>


                         {/*Group three*/}
                        <div data-AOS ="fade-up" 
                        data-AOS-duration ="5000"
                        className="linkGroup">
                            <span className='groupTitle'>
                                PARTNERS
                            </span>

                            <li className="footerList flex">
                                <FiChevronRight className='icon'/>
                                Bookings
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className='icon'/>
                                Rentcars
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className='icon'/>
                                HostelWorld
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className='icon'/>
                                Trivago
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className='icon'/>
                                TripAdvisor
                            </li>
                        </div>



                    </div>

        <div className="footerDiv flex">
            <small>BEST TRAVEL WEBSITE THEME</small>
             <small>COPYRIGHTS RESERVED .  ISRATECH 2025</small>
            
        </div>

                </div>
            </div>

                    
            


        </section>
    )
}

export default Footer
 