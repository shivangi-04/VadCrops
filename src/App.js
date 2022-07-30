import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Policy from './components/pages/Policy';
import ContactUs from './components/pages/ContactUs';
import AboutUs from './components/pages/AboutUs';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/policy' component={Policy} />
          <Route path='/contact-us' component={ContactUs} />
          <Route path='/about-us' component={AboutUs} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
