import { useState } from 'react';
import './index.css';

const CurrentConditions = () => {
  const [measures, setMeasures] = useState({
    temperature: 0,
    humidity: 0,
    date: '',
  });

  const getNewMeasures = async () => {
    const data = await fetch('http://localhost:8080/current-conditions').then(
      async (res) => await res.json()
    );

    setMeasures({ ...data });
  };

  return (
    <div id='current-conditions-container'>
      <h1>Current conditions:</h1>
      <p>Temperature: {measures.temperature}</p>
      <p>Humidity: {measures.humidity}</p>
      <p>Date: {measures.date}</p>
      <button id='get-new-measures-btn' onClick={getNewMeasures}>
        Get new measures
      </button>
    </div>
  );
};

export default CurrentConditions;
