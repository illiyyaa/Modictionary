import React from 'react';
import logo from './logo.png';
import { Link } from "react-router-dom";
export default function App(){
    return (
      <div>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <link rel="stylesheet" type="text/css" href="style.css" />
        <title>Modictionary</title>
        <header style={{color: '#e7e7e7', backgroundColor: '#485696', display: 'block'}}><img className="img" src="./logo.png" />  Modictionary</header>
        <div id="wrapper">
          <div id="sidebar">
            <ul>
              <li><Link to="/" >Home</Link></li>
              <li><Link to="" >About</Link></li>
              <li><Link to="" >Contact</Link></li>
              <li><Link to="/halaman/semester1.js">Semester 1</Link></li>
              <li><Link to="/halaman/semester2.js" >Semester 2</Link></li>
              <li><Link to="/halaman/semester3.js" >Semester 3</Link></li>
              <li><Link to="/halaman/semester4.js" >Semester 4</Link></li>
              <li><Link to="/halaman/semester5.js" >Semester 5</Link></li>
              <li><Link to="/halaman/semester6.js" >Semester 6</Link></li>
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
