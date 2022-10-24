
import './App.css';
import MarquesLogo from './img/logo.JPG'

import Header from './components/Header';
import HeroImg from './components/HeroImg';
import Testimonials from './components/Testimonials';
import UsefulLinks from './components/UsefulLinks';
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import Price from './components/Price';

function App() {
  return (
    <div className="App">
      <div className='wrapper'>

      <Header/>

      <HeroImg/>

      <UsefulLinks />

      <Testimonials />
      
      <Price />
      <FloatingWhatsApp  accountName='Fabio Marques' phoneNumber='12368088107' avatar={MarquesLogo} allowClickAway={true} />

      </div>

    </div>
  );
}

export default App;
