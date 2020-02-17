import React from 'react';
import './assets/css/bootstrap.min.css';
import './assets/css/pizza.css';
import Nav from './Nav';
import Slider from './Slider';
import About from './About';
import Types from './Types';
import Footer from './Footer';


function App() {
  return (
    <div>
      <Nav />
      <Slider />
      <About />
      <Types />
      <Footer />
    </div>
  );
}


export default App;
