import './styles/App.css';
import Main from './components/Main';
import NavBar from './components/NavBar.jsx'
import About from './components/About';
import Technologies from './components/Technologies';
import MediaCard from './components/card';
import data from './JSON/data.json'
import { ContactUs } from './components/ContactUs';
import gigachat from './assets/gigachat.mp3'
function App() {
  return (
    <div className="App">
      <NavBar />
      <Main />

      <audio controls>
        <source src={gigachat} type='audio/mpeg' />
        Your browser does not support the audio element.
      </audio>

      {/* <audio src={gigachat} autoPlay /> */}

      <div className='glass'>
        <About />
      </div>

      <div className='glass' style={{ marginTop: '3rem' }}>
        <Technologies />
      </div>

      <div className='glass cards' style={{ marginTop: '3rem' }}>
        <div className='proyContainer'>
          <h2 id='about'>Proyectos</h2>
          <div className='proyts'>
            {data.sort((a, b) => b.id - a.id).map(item => <MediaCard item={item} />)}
          </div>
        </div>
      </div>

      <div className='glass' style={{ marginTop: '3rem' }}>
        <div className='proyContainer'>
        
          <h2 id='about'>Contacto</h2>
        
          <h4 style={{color:'white', fontFamily:'Raleway'}} >Enviame un mensaje</h4>
          <ContactUs/>
        </div>

      </div>
    </div>
  );
}
export default App;
