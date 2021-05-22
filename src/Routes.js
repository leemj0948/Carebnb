import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Banner from './components/banner/Banner.components';
import Header from './components/header/Header.components';
import MapMainPage from './Map/MapMainPage';
import Main from './pages/Main/Main';

const Routes = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/map" component={MapMainPage} />
        <Route exact path="/" component={Main} />
      </Switch>
    </Router>
  );
};
export default Routes;
