import React from 'react';
import Profile from './components/Profile';
import CallToAction from './components/CallToAction';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className='card'>
      <Profile></Profile>
      <CallToAction></CallToAction>
      <About></About>
      <Footer></Footer>
    </div>
  );
}

export default App;
