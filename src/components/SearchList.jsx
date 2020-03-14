import React from 'react';
import SearchListItem from './SearchListItem';
import './SearchList.css';

const SearchList = (props) => {
  return (
    <ul className="search-list">
      { props.data.map(d => (
        <SearchListItem datum={ d } />
      )) }
    </ul>
  );
};

export default SearchList;
