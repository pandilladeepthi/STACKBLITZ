import React from 'react';
import './style.css';
import { useState, useEffect } from 'react';

export default function Home() {
  debugger;
  const [data, setData] = useState([]);
  useEffect(() => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
        setData(json);
      } catch (error) {
        console.log('error', error);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>homepage is modified</h1>
      <p></p>
      <div className="App">
        <h1> Fetch data from an api in react </h1>{' '}
        {data.map((item) => (
          <ol key={item.id}>website: {item.website},</ol>
        ))}
      </div>
    </div>
  );
}
