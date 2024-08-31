import React, { useState } from 'react';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import Footer from './components/Footer';
import Filter from './components/Filter';
import ProductDetail from './components/ProductDetail';
import Search from './components/Search'; // Import the Search component
import Pagination from './components/Pagination';


import './index.css';

// Sample product data
const allProducts = [
  { id: 1, name: 'Smartphone', description: 'Latest model smartphone', price: 699, category: 'Electronics', image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Jeans', description: 'Stylish blue jeans', price: 59, category: 'Clothing', image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Blender', description: 'High-speed blender', price: 129, category: 'Home Appliances', image: 'https://via.placeholder.com/150' },
  { id: 4, name: 'Book', description: 'Inspirational book', price: 19, category: 'Books', image: 'https://via.placeholder.com/150' },
  { id: 5, name: 'Soccer Ball', description: 'Standard soccer ball', price: 25, category: 'Sports', image: 'https://via.placeholder.com/150' },
  { id: 6, name: 'Lipstick', description: 'Premium red lipstick', price: 15, category: 'Beauty', image: 'https://via.placeholder.com/150' },
  // Add more products here
];

const perPage = 4; // Number of products per page

const App = () => {
  const [filteredProducts, setFilteredProducts] = useState(allProducts); // Products after filtering
  const [selectedProduct, setSelectedProduct] = useState(null); // For viewing product details
  const [currentPage, setCurrentPage] = useState(1); // For pagination

  // Handle filter functionality
  const handleFilter = (categories, priceRange, searchQuery) => {
    const filtered = allProducts.filter(product =>
      (categories.includes('All') || categories.includes(product.category)) &&
      product.price >= priceRange[0] && product.price <= priceRange[1] &&
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
    setCurrentPage(1); // Reset to first page when filtering
  };

  // Handle search functionality
  const handleSearch = (query) => {
    const filtered = allProducts.filter(product =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
    setCurrentPage(1); // Reset to first page when searching
  };

  // Handle product detail view
  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  // Close product detail
  const handleCloseDetail = () => {
    setSelectedProduct(null);
  };

  // Handle page change for pagination
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Calculate start and end index for pagination
  const startIndex = (currentPage - 1) * perPage;
  const currentProducts = filteredProducts.slice(startIndex, startIndex + perPage);

  return (
    <div className="app">
      <Header />
      <main>
        <Search onSearch={handleSearch} /> {/* Integrate Search component */}
        <Filter onFilter={handleFilter} />
        <section className="product-grid">
          {currentProducts.map(product => (
            <ProductCard key={product.id} product={product} onClick={() => handleProductClick(product)} />
          ))}
        </section>
        <Pagination
          total={filteredProducts.length}
          perPage={perPage}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
        {selectedProduct && <ProductDetail product={selectedProduct} onClose={handleCloseDetail} />}
      </main>
      <Footer />
    </div>
  );
};

export default App;
