import React from 'react';
import './App.css';

function App(props) {
  const msg = props.title || 'Hello World';
  return (
    <div className="App">
      <h1>{ msg }</h1>
    </div>
  );
}

export default App;
