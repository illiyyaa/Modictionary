import React, { useState } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import axios from 'axios';
import qs from 'qs';
import logo from './halaman/logo.png';
import './style.css';
import Home from "./halaman/Home";
import semester1 from "./halaman/semester1";
import semester2 from "./halaman/semester2";
import semester3 from "./halaman/semester3";
import semester4 from "./halaman/semester4";
import semester5 from "./halaman/semester5";
import semester6 from "./halaman/semester6";

function App() {
    return (
      <div className="App">
        <BrowserRouter> 
         <Route exact path="/" component={Home}></Route>
         <Route exact path="/semester1" component={semester1}></Route>
         <Route exact path="/semester2" component={semester2}></Route>
         <Route exact path="/semester3" component={semester3}></Route>
         <Route exact path="/semester4" component={semester4}></Route>
         <Route exact path="/semester5" component={semester5}></Route>
         <Route exact path="/semester6" component={semester6}></Route>
        </BrowserRouter>
      </div>
    );
}
export default App;
 