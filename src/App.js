
import './App.css';
import Contact from './components/Contact';

import Header from './components/Header';
import HeroImg from './components/HeroImg';
import Testimonials from './components/Testimonials';
import UsefulLinks from './components/UsefulLinks';


function App() {
  return (
    <div className="App">
      <div className='wrapper'>

      <Header/>

      <HeroImg/>

      <UsefulLinks />

      <Testimonials />

      <Contact/>

      </div>

    </div>
  );
}

export default App;
