import React from 'react';

const Input = ({handleSearch, searchValue}) => {
  return (
    <div className="landing-input_container">
      <input
        value={searchValue}
        onChange={e => handleSearch(e.target.value)}
        placeholder="Search"
        type="text"
      />
      <i className="fas fa-search" />
    </div>
  );
};

export default Input;
