import logo from './img/logo.JPG';
import './App.css';
import { FaPhoneAlt, FaFacebookSquare, FaInstagram } from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" className='App-logo'/>
        <a>  <FaPhoneAlt /> 236 808 8107</a>
        <p>
          <FaFacebookSquare /> mcanadaschooldriving 
        </p>
        <p>
          <FaInstagram /> mcanadaschooldriving 
        </p>

      </header>
    </div>
  );
}

export default App;
