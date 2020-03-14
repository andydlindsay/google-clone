import React from 'react';

const SearchBar = (props) => {
  return (
    <form onSubmit={ props.handleSubmit }>
      <label htmlFor="search-term">Search:</label>
      <input type="text" id="search-term" />
    </form>
  );
};

export default SearchBar;