import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Banner from './components/banner/Banner.components';
import Header from './Main/Components/header/Header.components';
// import Header from './components/header/Header.components';
import MapMainPage from './Map/MapMainPage';
import Main from './Main/Main';

import Footer from './Main/Components/footer/Footer';
import Room from './Room/Components/Room';
import PaymentDetail from './payment/PaymentDetail';
import paymentSuccess from './payment/paymentSuccess';

const Routes = () => {
  return (
    <Router>
      {window.location.pathname === '/paymentDetail' ? '' : <Header />}
      <Switch>
        <Route exact path="/map" component={MapMainPage} />
        <Route exact path="/" component={Main} />
        <Route exact path="/room/:id" component={Room} />
        <Route exact path="/paymentDetail" component={PaymentDetail} />
        <Route exact path="/MyTravelInfo" component={paymentSuccess} />
      </Switch>
      <Footer />
    </Router>
  );
};
export default Routes;
