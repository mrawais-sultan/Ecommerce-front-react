import React from 'react';
import './Pagination.css'; // Import your CSS for Pagination

const Pagination = ({ total, perPage, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(total / perPage);

  const handlePageChange = (page) => {
    onPageChange(page);
  };

  return (
    <div className="pagination">
      {[...Array(totalPages).keys()].map(page => (
        <button
          key={page}
          className={currentPage === page + 1 ? 'active' : ''}
          onClick={() => handlePageChange(page + 1)}
        >
          {page + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
