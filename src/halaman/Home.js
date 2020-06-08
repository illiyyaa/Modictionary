import React, { useState } from 'react';
import logo from './logo.png';
import axios from 'axios';
import qs from 'qs';
import '../style.css';

import { Link } from 'react-router-dom';

export default function Home(){
  //deklarasi awal
  const [value, setValue] = useState({
    mp: [],
    semester : '',
  });
//ambil data
  const getData = async () => {
    const BASE_URL = "https://qrary-fuseki-service.herokuapp.com";

    const headers = {
      'Accept': 'application/sparql-results+json,*/*;q=0.9',
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
  };
  const queryData = {
    query:
      `PREFIX mp: <http://www.modictionary.org/ns/praktikum#>

      SELECT ?matkul ?judulmodul ?dosen ?asprak ?semester
        WHERE
        { ?id
          	    mp:matkul    ?matkul ;
                mp:judulmodul    ?judulmodul ;
                mp:dosen    ?dosen ;
                mp:asprak    ?asprak ;
                mp:semester ?semester ;
              ORDER BY DESC(?semester)
              FILTER contains(?semester, "${value.semester}")
      }`
  };
  try {
    const { data } = await axios(BASE_URL, {
      method: 'POST',
      headers,
      data: qs.stringify(queryData)
    });
    console.log(data);

    // Convert Data
    const formatted_data = data.results.bindings.map((mp, index) => formatter(mp, index));
    console.log(formatted_data)

    setValue({
      ...value,
      mp: formatted_data
    });
  } catch (err) {
    console.error(err);
  }
}
//format
const formatter = (mp, index) => {
  return {
    "id": index,
    "judulmodul": mp.judulmodul.value,
    "matkul": mp.matkul.value,
    "dosen": mp.dosen.value,
    "asprak": mp.asprak.value,
    "semester" : mp.semester.value
  }
}
//handlechange
const handleChangesemester = event => {
  setValue({
    ...value,  
    'semester': event.target.value, 
  });
}
const result = value.mp.map((mp) =>
  <div class="container" style={{display:'flex'}}>
  <div class="card">
    <div key={mp.id}>
        <div className="judulmodul">Judul Modul : {mp.judulmodul}</div>
        <div class="row">
          <div class="col-md-2">
            Nama Dosen : {mp.dosen}  
          </div>
          <div class="col-md-2">
            Nama Asisten Praktikum : {mp.asprak}
          </div>
          <div class="col-md-2">
            Semester : {mp.semester}
          </div>
        </div>  
    </div>
    </div>
  </div>
)
//layout
    
    return (
      <div>
        <title>Modictionary</title>
        <header style={{color: '#e7e7e7', backgroundColor: '#0e0d3d', display: 'block', height : '50px'}}><img className="img" src={logo} /> 
        Modictionary
        <Link to="name" className="button"  style={{ float:'right'}} >Search by name</Link>
        </header>
        
        
        {/* <div id="wrapper">
          
        </div> */}
        {/* 	<i style="color:#3d3d29;">hi</i> */}
        <div id="content">
          <center> <h1>Cari Modul Praktikum </h1> </center>
          <select style={{width:'85%', height:'45px', background: '#0e0d3d', display:'inline-block', color:'white'}} value={value.semester} onChange={handleChangesemester}>
              {value.mp.map((mp) =>
              <option key={mp.semester}>Semester {mp.semester}</option>)}        
                   
          </select>
          <input 
                type="button" style={{ float:'right'}}
                className="button"
                id="search"
                placeholder="Mata Kuliah"
                value="Cari Modul"
                onClick={getData}/>
        
          {/* Hasil Pencarian */}
          
          <div className="result">
            <center><h2>
              Hasil Pencarian Modul Praktikum
            </h2>
            </center>
            {result}
          </div>
          </div>
      </div>
    );
  }

