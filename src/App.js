import React, { useState } from 'react';
import './App.css';
import data from './db/mock-db';
import SearchBar from './components/SearchBar';
import SearchList from './components/SearchList';

function App(props) {
  const [searchResults, setSearchResults] = useState(data);

  const handleSubmit = (val) => {
    const filtered = data.filter(d => d.content.includes(val.trim()))
    setSearchResults(filtered);
  };

  const msg = props.title || 'Google Clone';
  return (
    <div className="App">
      <h1>{ msg }</h1>
      <SearchBar handleSubmit={ handleSubmit } />
      <h2>Found { searchResults.length } results!</h2>
      <SearchList data={ searchResults } />
    </div>
  );
}

export default App;
