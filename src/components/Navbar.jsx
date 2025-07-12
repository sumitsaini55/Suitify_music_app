import React from 'react';

const Navbar = ({ onSearch }) => {
  return (
    <nav className="navbar">
      <div className="brand">
        <img src="/suitify.png" alt="Suitify" />
        <h2>Suitify</h2>
      </div>
      <input
        type="text"
        placeholder="Search songs..."
        className="searchInput"
        onChange={(e) => onSearch(e.target.value)}
      />
    </nav>
  );
};

export default Navbar;
