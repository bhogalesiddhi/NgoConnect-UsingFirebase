

// import React from 'react';
// import './VolunteersSection.css';
// import volunteer1 from "./../../images/volunteer1.jpg"

// const VolunteersSection = () => {
//   return (
//     <section className="volunteers-section">
//       <h2 className="section-heading">Hear it from our volunteers</h2>
//       <div className="cards-container">
//         <div className="card">
//           <img src={volunteer1} alt="Volunteer 1" className="card-image" />
//           <p className="card-message">Message 1 from Volunteer</p>
//         </div>
//         <div className="card">
//           <img src={volunteer1} alt="Volunteer 2" className="card-image" />
//           <p className="card-message">Message 2 from Volunteer</p>
//         </div>
//         <div className="card">
//           <img src={volunteer1} alt="Volunteer 3" className="card-image" />
//           <p className="card-message">Message 3 from Volunteer</p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default VolunteersSection;

// VolunteersSection.js

import React from 'react';
import './VolunteersSection.css';
import volunteer1 from "./../../images/volunteer1.jpg"; // Sample image path for Volunteer 1

const VolunteersSection = () => {
  return (
    <section className="volunteers-section">
      <h2 className="section-heading">Hear it from our volunteers</h2>
      <div className="cards-container">
        <div className="card">
          <img src={volunteer1} alt="Volunteer 1" className="card-image" />
          <div className="card-details">
            <h3>John Doe</h3>
            <p>Experience: 3 years</p>
            <p className="card-message">Message 1 from Volunteer</p>
          </div>
        </div>

        <div className="card">
          <img src={volunteer1} alt="Volunteer 2" className="card-image" />
          <div className="card-details">
            <h3>Jane Smith</h3>
            <p>Experience: 5 years</p>
            <p className="card-message">Message 2 from Volunteer</p>
          </div>
        </div>

        <div className="card">
          <img src={volunteer1} alt="Volunteer 3" className="card-image" />
          <div className="card-details">
            <h3>Emily Johnson</h3>
            <p>Experience: 2 years</p>
            <p className="card-message">Message 3 from Volunteer</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VolunteersSection;

