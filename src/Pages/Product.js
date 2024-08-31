import React, { useState } from 'react';
import ProductCard from './components/ProductCard';
import Filter from './components/Filter';
import ProductDetail from './components/ProductDetail';
import Pagination from './components/Pagination';
import { allProducts } from './data/products'; // Import your products data

const perPage = 4;

const Product = () => {
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const handleFilter = (categories, priceRange, searchQuery) => {
    const filtered = allProducts.filter(product =>
      (categories.includes('All') || categories.includes(product.category)) &&
      product.price >= priceRange[0] && product.price <= priceRange[1] &&
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
    setCurrentPage(1);
  };

  const handleSearch = (query) => {
    const filtered = allProducts.filter(product =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
    setCurrentPage(1);
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseDetail = () => {
    setSelectedProduct(null);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * perPage;
  const currentProducts = filteredProducts.slice(startIndex, startIndex + perPage);

  return (
    <div className="product-page">
      <Filter onFilter={handleFilter} />
      <Search onSearch={handleSearch} />
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
    </div>
  );
};

export default Product;
