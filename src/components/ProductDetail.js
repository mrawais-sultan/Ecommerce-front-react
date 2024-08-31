import React from 'react';
import './ProductDetail.css';
import Review from './Review'; // Importing the Review component

const ProductDetail = ({ product, onClose }) => {
  return (
    <div className="product-detail">
      <button onClick={onClose} className="close-btn">Close</button>
      <div className="product-detail-content">
        <img src={product.image} alt={product.name} />
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p><strong>Price:</strong> ${product.price}</p>
        <p><strong>Category:</strong> {product.category}</p>
      </div>
      
      {/* Integrating the Review component */}
      <Review productId={product.id} />
    </div>
  );
};

export default ProductDetail;
