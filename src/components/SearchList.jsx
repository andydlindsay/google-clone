import React from 'react';
import './SearchList.css';

const SearchList = (props) => {
  return (
    <ul className="search-list">
      { props.data.map(d => (
        <li>
          <h2>{ d.title }</h2>
          <p>{ d.content }</p>
          <a
            href={ d.website }
            target="_blank"
            rel="noopener noreferrer"
          >{ d.website }</a>
        </li>
      )) }
    </ul>
  );
};

export default SearchList;
