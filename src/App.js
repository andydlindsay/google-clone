import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import SearchList from './components/SearchList';

function App(props) {
  const msg = props.title || 'Google Clone';
  return (
    <div className="App">
      <h1>{ msg }</h1>
      <SearchBar />
      <SearchList />
    </div>
  );
}

export default App;
