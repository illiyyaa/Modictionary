import React from 'react';
import logo from './logo.png';
import { Link } from "react-router-dom";
export default function semester6(){
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
            <form action="./search.php" method="get">
              <input className="boxin" type="text" name="k" size={50} />
              <br />
              <b>Search by  </b>
              <select className="box " name="by">
                <option value>Sort</option>
                <option value="ModulID">Id</option>
                <option value="ModulTitle">Title</option>
                <option value="MataKuliah">Matkul</option>
                <option value="Asprak">Asprak</option>
                <option value="Dosen">Dosen</option>
                <option value="Semester">Semester</option>
              </select>
              <select className="box" name="sort">
                <option value>None</option>
                <option value="Asc">Asc</option>
                <option value="Desc">Desc</option>
              </select>
              <input type="submit" className="button" defaultValue="Search" />
            </form>
          </center>
          {/* bikin paragraf sebanyak mungkin sampai halaman bisa discroll kebawah */}
        </div>
      </div>
    );
  };
