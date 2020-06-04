import React, { useState } from 'react';
import logo from './logo.png';
import axios from 'axios';
import qs from 'qs';

import { Link } from 'react-router-dom';

export default function Home(){
  const [value, setValue] = useState({
    mp: [],
    judulmodul: '',
    matkul:'',
    dosen :'',
    asprak :'',
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

      SELECT ?matkul ?judulmodul ?dosen ?asprak 
        WHERE
        { ?id
          	    mp:matkul    ?matkul ;
                mp:judulmodul    ?judulmodul ;
                mp:dosen    ?dosen ;
                mp:asprak    ?asprak ;
              FILTER contains(lcase(str(?matkul)), lcase(str("${value.matkul ? value.matkul : ''}")))
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
    "asprak": mp.asprak.value
  }
}


//handlechange

const handleChangematkul = event => {
  setValue({
    ...value,  
    'matkul': event.target.value, 
  });
}



//nampilin
const result = value.mp.map((mp) =>
  <div className="container">
    <div key={mp.id}>
      <div className="col-md-10">
        <div className="judulmodul">{mp.judulmodul}</div>
        <div class="row">
          <div class="col-md-5">
            {mp.matkul}
          </div>
          <div class="col-md-2">
            {mp.dosen}  
          </div>
          <div class="col-md-2">
            {mp.asprak}
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
        <header style={{color: '#e7e7e7', backgroundColor: '#485696', display: 'block'}}><img className="img" src={logo} />  Modictionary</header>
        <div id="wrapper">
          <div id="sidebar">
            <ul>
              <li><Link to="">Home</Link></li>
              <li><Link to="">About</Link></li>
              <li><Link to="">Contact</Link></li>
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
          <center> <h1>Cari Modul Praktikum</h1> 
            <form>
              <input className="boxin" type="text" name="k" size={50 } onChange={handleChangematkul} setValue={value.matkul}/>          
              <input 
                type="button"
                className="button"
                id="search"
                placeholder="Mata Kuliah"
                value="Cari Matkul"
                onClick={getData}/>
            </form>
          </center>
          {/* Hasil Pencarian */}
          <div class="result">
            <h5>
              Hasil Pencarian Modul Praktikum
            </h5>
            <div>
              {result}
            </div>
          </div>
          </div>
      </div>
    );
  }
