import React from 'react';
import logo from './logo.png';
import './style.css';

function App() {
  return (
    <div>
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <link rel="stylesheet" type="text/css" href="style.css" />
      <title>Modictionary</title>
      <header style={{color: '#e7e7e7', backgroundColor: '#485696', display: 'block'}}><img className="img" src={logo} />  Modictionary</header>
      <div id="wrapper">
        <div id="sidebar">
          <ul>
            <li><a className="a" href="#">Home</a></li>
            <li><a className="a" href="#">About</a></li>
            <li><a className="a" href="#">Contact</a></li>
            <li><a className="a" href="#">Semester 1</a></li>
            <li><a className="a" href="#">Semester 2</a></li>
            <li><a className="a" href="#">Semester 3</a></li>
            <li><a className="a" href="#">Semester 4</a></li>
            <li><a className="a" href="#">Semester 5</a></li>
            <li><a className="a" href="#">Semester 6</a></li>
          </ul>
        </div>
      </div>
      {/* 	<i style="color:#3d3d29;">hi</i> */}
      <div id="content">
        <center> <h1>Cari Modul Praktikum</h1> 
          <form action="./search.php" method="get">
            <input className="boxin" type="text" name="k" size={50} />
            <br />
            <b>Sort by</b>
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
  }
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


export default App;
