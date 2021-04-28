import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Home = () => {
  return (
    <div id='home-page'>
      <h1 id='home-title'>Experiment our products</h1>
      <div id='applications-options'>
        <Link to='/current-conditions' className='application-option'>
          <h4>Current Conditions</h4>
        </Link>
        <Link to='/weather-statistics' className='application-option'>
          <h4>Weather Statistics</h4>
        </Link>
      </div>
    </div>
  );
};

export default Home;
