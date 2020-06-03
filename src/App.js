import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import home from './halaman/home';
import logo from './halaman/logo.png';
import './style.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={home}></Route>
      </div>
    </BrowserRouter>
  );
}
export default App;
  /*return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );*/
  //return <h1>Hello World</h1>



