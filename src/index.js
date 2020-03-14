import React from 'react'
import ReactDOM from 'react-dom'
import App from './App';
import './index.css'

const Main = () => {
  return (
    <div className="App">
      <App title="Google Clone">
        {/* { children go here } */}
      </App>
    </div>
  );
}

ReactDOM.render(<Main />, document.getElementById('root'))
