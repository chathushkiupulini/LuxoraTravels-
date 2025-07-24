import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import './main.scss'
import img1 from '../../Assets/img1.jpg'
import img2 from '../../Assets/img2.jpg'
import img3 from '../../Assets/img3.jpg'
import img4 from '../../Assets/img4.jpg'
import img5 from '../../Assets/img5.jpg'
import img6 from '../../Assets/img6.jpg'
import img7 from '../../Assets/img7.jpg'
import img8 from '../../Assets/img8.jpg'
import img9 from '../../Assets/img9.jpg'
import img10 from '../../Assets/img10.jpg'
import img11 from '../../Assets/img11.jpg'
import img12 from '../../Assets/img12.jpg'
import img13 from '../../Assets/img13.jpg'
import img14 from '../../Assets/img14.jpg'
import img15 from '../../Assets/img15.jpg'
import img16 from '../../Assets/img16.jpg'
import { HiLocationMarker } from "react-icons/hi";
import { LuClipboardCheck } from "react-icons/lu";
import Flag from 'react-world-flags';

const getCountryCode = (countryName) => {
  const countryMap = {
    'Sri Lanka': 'LK',
    'Greece': 'GR',
    'Japan': 'JP',
    'Canada': 'CA',
    'France': 'FR',
    'French Polynesia': 'PF',
    'Peru': 'PE',
    'South Africa': 'ZA',
    'Italy': 'IT',
    'UAE': 'AE',
    'Jordan': 'JO',
    'Iceland': 'IS',
    'Spain': 'ES',
    'USA': 'US',
    'Indonesia': 'ID',
    'Switzerland': 'CH',
  };
  return countryMap[countryName] || 'UN'; // fallback
};



const Data = [
  
  {
    id: 1,
    imgSrc: img1,
    destTitle: 'Ella',
    location: 'Sri Lanka',
    grade: 'NATURE & CULTURE',
    fees: '$650',
    description: 'Tea plantations, waterfalls, and the Nine Arches Bridge await in Ella.'
  },
  {
    id: 2,
    imgSrc: img2,
    destTitle: 'Santorini',
    location: 'Greece',
    grade: 'ROMANTIC ESCAPE',
    fees: '$850',
    description: 'Whitewashed houses, blue domes, and amazing sunsets.'
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: 'Kyoto',
    location: 'Japan',
    grade: 'CULTURAL HERITAGE',
    fees: '$920',
    description: 'Bamboo forests, ancient temples, and a deep cultural vibe.'
  },
  {
    id: 4,
    imgSrc: img4,
    destTitle: 'Banff',
    location: 'Canada',
    grade: 'NATURE RETREAT',
    fees: '$680',
    description: 'Crystal lakes and snow-capped mountains perfect for hikers.'
  },
  {
    id: 5,
    imgSrc: img5,
    destTitle: 'Paris',
    location: 'France',
    grade: 'CITY OF LOVE',
    fees: '$1000',
    description: 'Cafés, art, fashion, and the Eiffel Tower.'
  },
  {
    id: 6,
    imgSrc: img6,
    destTitle: 'Bora Bora',
    location: 'French Polynesia',
    grade: 'TROPICAL LUXURY',
    fees: '$1500',
    description: 'Overwater bungalows and turquoise lagoons.'
  },
  {
    id: 7,
    imgSrc: img7,
    destTitle: 'Machu Picchu',
    location: 'Peru',
    grade: 'ANCIENT WONDER',
    fees: '$780',
    description: 'A sacred site in the Andes full of mystery and beauty.'
  },
  {
    id: 8,
    imgSrc: img8,
    destTitle: 'Cape Town',
    location: 'South Africa',
    grade: 'COASTAL ADVENTURE',
    fees: '$870',
    description: 'Table Mountain views, wineries, and oceanfront culture.'
  },
  {
    id: 9,
    imgSrc: img9,
    destTitle: 'Venice',
    location: 'Italy',
    grade: 'WATERFRONT CHARM',
    fees: '$900',
    description: 'Gondolas, canals, and Renaissance architecture.'
  },
  {
    id: 10,
    imgSrc: img10,
    destTitle: 'Dubai',
    location: 'UAE',
    grade: 'MODERN WONDER',
    fees: '$1100',
    description: 'Skyscrapers, luxury shopping, and desert safaris.'
  },
  {
    id: 11,
    imgSrc: img11,
    destTitle: 'Petra',
    location: 'Jordan',
    grade: 'ANCIENT CITY',
    fees: '$770',
    description: 'The Rose City carved into cliffs is truly breathtaking.'
  },
  {
    id: 12,
    imgSrc: img12,
    destTitle: 'Reykjavik',
    location: 'Iceland',
    grade: 'NATURAL PHENOMENON',
    fees: '$950',
    description: 'See the Northern Lights and explore icy volcanoes.'
  },
  {
    id: 13,
    imgSrc: img13,
    destTitle: 'Barcelona',
    location: 'Spain',
    grade: 'URBAN ARTSCAPE',
    fees: '$880',
    description: 'Gaudí architecture and Mediterranean charm.'
  },
  {
    id: 14,
    imgSrc: img14,
    destTitle: 'New York',
    location: 'USA',
    grade: 'ICONIC CITY',
    fees: '$1100',
    description: 'Skylines, Broadway, and cultural fusion in every street.'
  },
  {
    id: 15,
    imgSrc: img15,
    destTitle: 'Bali',
    location: 'Indonesia',
    grade: 'TROPICAL ESCAPE',
    fees: '$720',
    description: 'Beaches, temples, and serene rice terraces.'
  },
  {
    id: 16,
    imgSrc: img16,
    destTitle: 'Zurich',
    location: 'Switzerland',
    grade: 'MOUNTAIN LUXURY',
    fees: '$1150',
    description: 'Lakeside charm with views of the Swiss Alps.'
  }
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
                            <Flag code={getCountryCode(location)} style={{ width: '20px', height: '15px', marginRight: '6px' }} />
                                 <span className='name'>{location}</span>
                                                 </span>


                  <div className="fees flex">
                    <div className="grade">
                      <span>{grade}<small></small></span>
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
