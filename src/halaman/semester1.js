import React from 'react';
import logo from './logo.png';
import { Link } from "react-router-dom";
export default function semester1(){
    return (
      <div>
        <title>Modictionary</title>
        <header style={{color: '#e7e7e7', backgroundColor: '#485696', display: 'block'}}><img className="img" src="./logo.png" />  Modictionary</header>
        <div id="wrapper">
          <div id="sidebar">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/semester1">Semester 1</Link></li>
              <li><Link to="/semester2">Semester 2</Link></li>
              <li><Link to="/semester3">Semester 3</Link></li>
              <li><Link to="/semester4">Semester 4</Link></li>
              <li><Link to="/semester5">Semester 5</Link></li>
              <li><Link to="/semester6">Semester 6</Link></li>
            </ul>
          </div>
        </div>
        {/* 	<i style="color:#3d3d29;">hi</i> */}
        <div id="content">
          <center> <h1></h1> 
            <div class="card">
                <img src="img_avatar.png" alt="Modul" class="img"></img>
                    <div class="container">
                        <h4><b>Modul Praktikum</b></h4> 
                        <p>Algoritma & Pemrograman</p> 
                    </div>
            </div>
          </center>
          {/* bikin paragraf sebanyak mungkin sampai halaman bisa discroll kebawah */}
        </div>
      </div>
    );
  };
