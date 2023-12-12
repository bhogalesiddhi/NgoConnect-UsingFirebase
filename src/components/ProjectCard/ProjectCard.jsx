// Card.js

import React from 'react';
import './ProjectCard.css';
import volunteer from '../../images/volunteer1.jpg'

const ProjectCard = ({ imageUrl, description, date }) => {
  return (
    <div className='card'>
      <img src={volunteer} alt='Project' />
      <div className='cardDescription'>{description}</div>
      <div className='cardDate'>Date: {date}</div>
    </div>
  );
};

export default ProjectCard;
