import React from 'react'
import ReactDOM from 'react-dom'
import App from './App';
import './index.css'

const Main = () => {
  return (
    <div className="App">
      <App />
    </div>
  );
}

ReactDOM.render(<Main />, document.getElementById('root'))
