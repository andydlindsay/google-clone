import React from 'react';
import './SearchListItem.css';

const SearchListItem = (props) => {
  const { datum } = props;
  return (
    <li className="search-list-item">
      <h2>{ datum.title }</h2>
      <p>{ datum.content }</p>
      <a
        href={ datum.website }
        target="_blank"
        rel="noopener noreferrer"
      >{ datum.website }</a>
    </li>
  );
};

export default SearchListItem;
