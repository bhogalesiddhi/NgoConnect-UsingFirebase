// NgoCategory.js

import React from 'react';
import './NgoCategory.css'; // Import your CSS file for styling
import Navbar from '../../components/Navbar/Navbar';
import { useNavigate } from 'react-router-dom';

const NgoCategory = () => {
  const navigate = useNavigate();
  const categories = [ // Sample array of NGO categories (you can replace this with your actual categories)
    {
      name: 'Education',
      description: 'Supporting education for children in need.',
      imageUrl: 'education.jpg', // Replace with your image URL
    },
    {
      name: 'Healthcare',
      description: 'Promoting health and well-being.',
      imageUrl: 'healthcare.jpg', // Replace with your image URL
    },
    {
      name: 'Environment',
      description: 'Preserving and protecting the environment.',
      imageUrl: 'environment.jpg', // Replace with your image URL
    },
    {
        name: 'Environment',
        description: 'Preserving and protecting the environment.',
        imageUrl: 'environment.jpg', // Replace with your image URL
      },
      {
        name: 'Environment',
        description: 'Preserving and protecting the environment.',
        imageUrl: 'environment.jpg', // Replace with your image URL
      },
      {
        name: 'Environment',
        description: 'Preserving and protecting the environment.',
        imageUrl: 'environment.jpg', // Replace with your image URL
      },
    // Add more categories as needed
  ];

  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    // Add logic to handle search term
    console.log(`Search term: ${searchTerm}`);
  };

  const handleCategoryClick = (category) => {
    // Handle category click, navigate to the page showing NGOs under the selected category
    console.log(`Selected category: ${category}`);
    navigate(`/ngos/${category}`)

    // Add your logic to navigate to the page showing NGOs under the selected category
  };

  return (
    <>
    <Navbar/>
        <div className="ngo-category">
        <div className="search-bar">
        <input type="text" placeholder="Search categories..." onChange={handleSearch} />
      </div>
      {/* Cards representing categories */}
      <div className="category-cards">
        {categories.map((category, index) => (
          <div className="category-card" key={index}>
            <img src={category.imageUrl} alt={category.name} />
            <h3>{category.name}</h3>
            <p>{category.description}</p>
            <button onClick={() => handleCategoryClick(category.name)}>View NGOs</button>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default NgoCategory;
