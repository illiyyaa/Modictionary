import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import home from './halaman/home.js';
import semester1 from './halaman/semester1.js';
import semester2 from './halaman/semester2.js';
import semester3 from './halaman/semester3.js';
import semester4 from './halaman/semester4.js';
import semester5 from './halaman/semester5.js';
import semester6 from './halaman/semester6.js';
import logo from './halaman/logo.png';
import './style.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={home}></Route>
      </div>
      <div>
        <Route exact path="/halaman/semester1.js" component={semester1}></Route>
      </div>
      <div>
        <Route exact path="/halaman/semester2.js" component={semester2}></Route>
      </div>
      <div>
        <Route exact path="/halaman/semester3.js" component={semester3}></Route>
      </div>
      <div>
        <Route exact path="/halaman/semester4.js" component={semester4}></Route>
      </div>
      <div>
        <Route exact path="/halaman/semester5.js" component={semester5}></Route>
      </div>
      <div>
        <Route exact path="/halaman/semester6.js" component={semester6}></Route>
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



