import React, { useState } from 'react';

const SearchBar = (props) => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <form onSubmit={ e => {
      e.preventDefault();
      props.handleSubmit(searchTerm);
    }}>
      <label htmlFor="search-term">Search:</label>
      <input
        type="text"
        id="search-term"
        value={searchTerm}
        onChange={ e => setSearchTerm(e.target.value) }
      />
    </form>
  );
};

export default SearchBar;