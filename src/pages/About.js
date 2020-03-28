import React, { useEffect, useState } from 'react';
import '../App.css';

function About() {

    useEffect(()=>{
        stats();
    }, [])

    const [coronaData, setItems] = useState({});

    async function stats(){
        const resp = await fetch('https://corona.lmao.ninja/all');
        const data = await resp.json();
        console.log(data);
        setItems(data);
    }

  return (
    <div>
      <h1>About Page</h1>
      <ul>
        {
            Object.keys(coronaData).map((key, index) => (
                <li key={key}>{key} : {coronaData[key]}</li>
            ))
        }
      </ul>
    </div>
  );
}

export default About;
