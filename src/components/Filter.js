import React, { useState } from 'react';
import './Filter.css'; 

const Filter = ({ onFilter }) => {
  const [categories, setCategories] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    setCategories([value]); // Select only one category at a time
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const applyFilters = () => {
    onFilter(categories.length ? categories[0] : 'All', priceRange, searchQuery);
  };

  return (
    <div className="filter">
      <div className="filter-search">
        <label htmlFor="search">Search:</label>
        <input
          id="search"
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search products..."
        />
      </div>

      <div className="filter-category">
        <label>Category:</label>
        <label>
          <input type="radio" value="Electronics" onChange={handleCategoryChange} name="category" /> Electronics
        </label>
        <label>
          <input type="radio" value="Clothing" onChange={handleCategoryChange} name="category" /> Clothing
        </label>
        <label>
          <input type="radio" value="Home Appliances" onChange={handleCategoryChange} name="category" /> Home Appliances
        </label>
        <label>
          <input type="radio" value="Books" onChange={handleCategoryChange} name="category" /> Books
        </label>
        <label>
          <input type="radio" value="Sports" onChange={handleCategoryChange} name="category" /> Sports
        </label>
        <label>
          <input type="radio" value="Beauty" onChange={handleCategoryChange} name="category" /> Beauty
        </label>
        {/* Add more categories as needed */}
      </div>

      <div className="filter-price">
        <label htmlFor="price">Price Range:</label>
        <input
          type="range"
          id="price"
          min="0"
          max="1000"
          step="10"
          value={priceRange[1]}
          onChange={(e) => setPriceRange([0, Number(e.target.value)])}
        />
        <span>{`$${priceRange[0]} - $${priceRange[1]}`}</span>
      </div>

      <button onClick={applyFilters} className="apply-filters">Apply Filters</button>
    </div>
  );
};

export default Filter;
