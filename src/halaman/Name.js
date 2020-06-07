import React, { useState } from 'react';
import logo from './logo.png';
import axios from 'axios';
import qs from 'qs';
import '../style.css';

import { Link } from 'react-router-dom';

export default function Name(){

  const [value, setValue] = useState({
    mp: [],
    input: ''
  });

  const getData = async () => {
    const BASE_URL = "http://localhost:3030/modic-semweb/query";

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
                FILTER (regex(?matkul, "^${value.input}","i") || regex(?dosen, "^${value.input}","i") || regex(?asprak, "^${value.input}","i") || regex(?judulmodul, "^${value.input}","i" ))
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

  const handleChange = event => {
    setValue({
      ...value,
      'input': event.target.value
    })
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
        <header style={{color: '#e7e7e7', backgroundColor: '#0e0d3d', display: 'block', height : '50px'}}><img className="img" alt="logo" src={logo} /> 
        Modictionary
        <Link to="/" className="button"  style={{ float:'right'}} >Search by semester</Link>
        </header>
        
        {/* <div id="wrapper">
          
        </div> */}
        {/* 	<i style="color:#3d3d29;">hi</i> */}
        <div id="content">
        <center> 
          <h1>Cari Modul Praktikum</h1> 
        <input  onChange={handleChange} type="text" placeholder="Masukkan nama mata kuliah, dosen, atau asprak" style={{width:'85%', height:'40px', background: '#00000', display:'inline-block'}}/>          
              <button 
                type="button" style={{ float:'right'}}
                className="button"
                placeholder="Mata Kuliah"
                onClick={getData}>Search
                </button>
        </center>

          {/* Hasil Pencarian */}
          
          <div class="result">
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
