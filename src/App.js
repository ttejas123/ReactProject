import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Services from './Services/Services.js';
import Home from './Home/Home.js';
import Contact from './Contact/Contact.js';
import About from './About/About.js';
import Navbar from './navbar.js'; 
function App() { 
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" render={()=><Home/>} />
        <Route exact path="/contact" render={()=><Contact/>} />
        <Route exact path="/about" render={()=><About/>} />
        <Route exact path="/services" render={()=><Services/>} />
        <Redirect to="/" />
      </Switch>
      
    </>
  );
}

export default App;
