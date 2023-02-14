import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Nav from './components/Nav';
import Footer from './components/Footer';
import RoutesComp from './RoutesComp';


export default function App() {
  console.log('App starting....')
  return (
    <div>
      <Nav />
      <div className="outlet">
        <RoutesComp />
      </div>
      <Footer />
    </div>
  );
}
