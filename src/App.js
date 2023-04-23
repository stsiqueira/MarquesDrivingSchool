
import './App.css';
import MarquesLogo from './img/logo.JPG'

import Header from './components/Header';
import HeroImg from './components/HeroImg';
import Testimonials from './components/Testimonials';
import UsefulLinks from './components/UsefulLinks';
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import Price from './components/Price';
import Police from './components/Police';
import { useState } from 'react';

function App() {
  const [showPolice, setShowPolice ] = useState(false);
  return (
    <div className="App">ß
      <div className='wrapper'>

      <Header/>

      <HeroImg/>

      <UsefulLinks />

      <Testimonials />
      
      <Price />

      <div className='policeContainer'>
        <p onClick={() => setShowPolice(!showPolice) }>
      Please read our <strong><em>police</em></strong>
        </p>

      {
        showPolice ? 
        <>
        <Police/> 
        <p onClick={()=> setShowPolice(false)}>back to home page</p>
        </>
        :      
        <p>It has important information that you should read. {showPolice}</p>
      }
      </div>

      <FloatingWhatsApp  accountName='Fabio Marques' phoneNumber='12368088107' avatar={MarquesLogo} allowClickAway={true} />

      </div>

    </div>
  );
}

export default App;
