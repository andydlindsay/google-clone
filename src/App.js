import React from 'react';
import './App.css';
import data from './db/mock-db';
import SearchBar from './components/SearchBar';
import SearchList from './components/SearchList';

function App(props) {
  const msg = props.title || 'Google Clone';
  return (
    <div className="App">
      <h1>{ msg }</h1>
      <SearchBar />
      <SearchList data={ data } />
    </div>
  );
}

export default App;
