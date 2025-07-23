import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import './main.scss'
import img from '../../Assets/img3.jpg'
import img2 from '../../Assets/img4.jpg'
import img3 from '../../Assets/img5.jpg'
import img4 from '../../Assets/img6.jpg'
import img5 from '../../Assets/img7.jpg'
import img6 from '../../Assets/img8.jpg'
import img7 from '../../Assets/img9.jpg'
import img8 from '../../Assets/img10.jpg'
import img9 from '../../Assets/img11.jpg'
import { HiLocationMarker } from "react-icons/hi";
import { LuClipboardCheck } from "react-icons/lu";

const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: 'Changed', // Fixed key name
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'gfgdjgwiuegfbjkerb bg5huigbb nvriheg8ryg bui54hituhb'
  },

   {
    id: 1,
    imgSrc: img2,
    destTitle: 'Changed', // Fixed key name
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'gfgdjgwiuegfbjkerb bg5huigbb nvriheg8ryg bui54hituhb'
  },

   {
    id: 1,
    imgSrc: img3 ,
    destTitle: 'Changed', // Fixed key name
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'gfgdjgwiuegfbjkerb bg5huigbb nvriheg8ryg bui54hituhb'
  },


   {
    id: 1,
    imgSrc: img4,
    destTitle: 'Changed', // Fixed key name
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'gfgdjgwiuegfbjkerb bg5huigbb nvriheg8ryg bui54hituhb'
  },


   {
    id: 1,
    imgSrc: img5,
    destTitle: 'Changed', // Fixed key name
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'gfgdjgwiuegfbjkerb bg5huigbb nvriheg8ryg bui54hituhb'
  },


   {
    id: 1,
    imgSrc: img6,
    destTitle: 'Changed', // Fixed key name
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'gfgdjgwiuegfbjkerb bg5huigbb nvriheg8ryg bui54hituhb'
  },

   {
    id: 1,
    imgSrc: img7,
    destTitle: 'Changed', // Fixed key name
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'gfgdjgwiuegfbjkerb bg5huigbb nvriheg8ryg bui54hituhb'
  },


   {
    id: 1,
    imgSrc: img8,
    destTitle: 'Changed', // Fixed key name
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'gfgdjgwiuegfbjkerb bg5huigbb nvriheg8ryg bui54hituhb'
  },


   {
    id: 1,
    imgSrc: img9,
    destTitle: 'Changed', // Fixed key name
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'gfgdjgwiuegfbjkerb bg5huigbb nvriheg8ryg bui54hituhb'
  },
];



const Main = () => {

    //lets create a react hook to add a scroll animation...
    useEffect(()=>{
      AOS.init({duration:2000})
    },[])
   
   
    

   return(

    <section className='main container section'>
      <div className='secTitle'>
        <h3 data-AOS ="fade-right" className='title'>
          Most Visited Destinations
        </h3>
      </div>

      <div className="secContent grid">
        {
          Data.map(({ id, imgSrc, destTitle, location, grade, fees, description }) => {
            return (
              <div key={id} 
              data-AOS ="fade-up" 
              className="singleDestination">

                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>

                <div className="cardInfo">
                  <h4 className='destTitle'>{destTitle}</h4>

                  <span className='continent flex'>
                    <HiLocationMarker className='icon' />
                    <span className='name'>{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>{grade}<small>+1</small></span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>
                </div>

                <button className='btn flex'>
                  DETAILS <LuClipboardCheck className='icon' />
                </button>

              </div>
            );
          })
        }
      </div>
    </section>
  );
}

export default Main;
