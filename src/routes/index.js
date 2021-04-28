import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../components/Home';
import CurrentConditions from '../components/CurrentConditions';
import WeatherStatistics from '../components/WeatherStatistics';

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route exact path='/current-conditions'>
        <CurrentConditions />
      </Route>
      <Route exact path='/weather-statistics'>
        <WeatherStatistics />
      </Route>
    </Switch>
  );
};

export default Routes;
