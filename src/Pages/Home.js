import React from 'react';
import './Home.css'; // Add your styles here

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <h1>Welcome to My Store</h1>
        <p>Your one-stop shop for all the latest products.</p>
      </section>
      <section className="features">
        <h2>Our Features</h2>
        <div className="feature-card">
          <h3>Quality Products</h3>
          <p>We offer only the best quality products.</p>
        </div>
        <div className="feature-card">
          <h3>Fast Shipping</h3>
          <p>Get your products delivered fast and secure.</p>
        </div>
        <div className="feature-card">
          <h3>Customer Support</h3>
          <p>Our support team is here to help you 24/7.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
