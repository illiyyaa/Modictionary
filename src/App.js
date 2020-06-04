import React, { useState } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import axios from 'axios';
import qs from 'qs';
import logo from './halaman/logo.png';
import './style.css';
import Home from "./halaman/Home";


function App() {
    return (
      <div className="App">
        <BrowserRouter> 
         <Route exact path="/" component={Home}></Route>
      
        </BrowserRouter>
      </div>
    );
}
export default App;
 