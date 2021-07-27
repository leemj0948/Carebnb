import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Banner from './components/banner/Banner.components';
import Header from './Main/Components/header/Header.components';
// import Header from './components/header/Header.components';
import MapMainPage from './Map/MapMainPage';
import Main from './Main/Main';
// import Main from './pages/Main/Main';
import Login from './Login/Login';
import Footer from './Main/Components/footer/Footer';
import Room from './Room/Components/Room';
import PaymentDetail from './payment/PaymentDetail';
import PaymentSuccess from './payment/paymentSuccess';

const Routes = () => {
  // function scrollE() {
  //   let currentScrollPos = window.pageYOffset;
  //   console.log(currentScrollPos);s
  // }
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/map" component={MapMainPage} />
        <Route exact path="/" component={Main} />
        <Route path="/MyTravelInfo" component={PaymentSuccess} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/room/:id" component={Room} />
        <Route exact path="/paymentDetail" component={PaymentDetail} />
      </Switch>
      <Footer />
    </Router>
  );
};
export default Routes;
