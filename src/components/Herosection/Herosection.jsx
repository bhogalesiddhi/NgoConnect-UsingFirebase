// // HeroSection.js

// import React from 'react';
// import './Herosection.css';
// import hero from '../../images/header.png'

// const Herosection = () => {
//   return (
//     <div className="hero-section">
//       <img src={hero} alt="Hero" className="hero-image" />
//     </div>
//   );
// };

// export default Herosection;
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles

import './Herosection.css';
import hero1 from '../../images/hero1.jpg';
import hero2 from '../../images/hero2.jpg';
import hero3 from '../../images/header.png';

const Herosection = () => {
  return (
    <div className="hero-section">
      <Carousel className="carousel-root"  showThumbs={false} infiniteLoop autoPlay>
        <div>
          <img src={hero1} alt="Hero 1" />
        </div>
        <div>
          <img src={hero2} alt="Hero 2" />
        </div>
        <div>
          <img src={hero3} alt="Hero 3" />
        </div>
      </Carousel>
    </div>
  );
};

export default Herosection;

