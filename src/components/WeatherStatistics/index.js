import { useState } from 'react';
import './index.css';

const WeatherStatistics = () => {
  const [statistics, setStatistics] = useState([]);

  const getWeatherStatistics = async () => {
    const data = await fetch('http://localhost:8080/weather-statistics').then(
      async (res) => await res.json()
    );

    setStatistics([...data]);
  };

  console.log(statistics);
  return (
    <div id='weather-statistics-container'>
      <h1>Weather Statistics:</h1>
      <div>
        {statistics.length > 0
          ? statistics.map((measures) => {
              console.log(measures);
              return (
                <table className='measures'>
                  <tr>
                    <th>Temperature</th>
                    <th>Humidity</th>
                    <th>Date</th>
                  </tr>
                  <tr>{measures.temperature}</tr>
                  <tr>{measures.humidity}</tr>
                  <tr>{measures.date}</tr>
                  {measures.temperature}
                </table>
              );
            })
          : null}
      </div>
      <button id='get-weather-statistics-btn' onClick={getWeatherStatistics}>
        Get most recent weather statistics
      </button>
    </div>
  );
};

export default WeatherStatistics;
