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
      <div id='weather-statistics-tables-container'>
        {statistics.length > 0
          ? statistics.map((measures) => {
              console.log(measures);
              return (
                <>
                  <table className='measurements-record-table'>
                    <tr className='measurements-table-headers'>
                      <th className='measurements-table-header'>Temperature</th>
                      <th className='measurements-table-header'>Humidity</th>
                      <th className='measurements-table-header'>Date</th>
                    </tr>
                    <tr className='measurements-table-data-row'>
                      <td className='measurements-table-data'>
                        {measures.temperature}
                      </td>
                      <td className='measurements-table-data'>
                        {measures.humidity}
                      </td>
                      <td className='measurements-table-data'>
                        {measures.date}
                      </td>
                    </tr>
                  </table>
                </>
              );
            })
          : null}
      </div>
      <button id='get-weather-statistics-btn' onClick={getWeatherStatistics}>
        Get the most recent weather statistics
      </button>
    </div>
  );
};

export default WeatherStatistics;
