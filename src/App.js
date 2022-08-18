import './styles/App.css';
import Main from './components/Main';
import NavBar from './components/NavBar.jsx'
import About from './components/About';
import Technologies from './components/Technologies';
import MediaCard from './components/card';
import data from './JSON/data.json'
import { ContactUs } from './components/ContactUs';
import ScrollToTop from 'react-scroll-to-top';
import ArrowDropUpRoundedIcon from "@mui/icons-material/ArrowDropUpRounded";
// import ReactPlayer from "react-player"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import gigachat from './assets/gigachat.mp3'
// import Audio from './components/Audio'
function App() {

  return (
    <div className="App">
      <NavBar />
      <Main />

      <div className='glass' style={{ alignItems: 'center', marginBottom: '3rem' }} >
        <h2 id='about'>Reproducir</h2>
        <h4 style={{ color: 'white', fontFamily: 'Raleway' }}>Para el momento epico</h4>
        <iframe style={{ paddingTop: '3rem' }} title='Bring Me the horizon' width="80%" height="133" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/399382389&color=%23454645&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
       
      </div>

      <div className='glass' id="About">
        <About />
      </div>

      <div className='glass' style={{ marginTop: '3rem' }} id="Technologies" >
        <Technologies />
      </div>

      <div className='glass cards' style={{ marginTop: '3rem' }} id="Projects">
        <div className='proyContainer' >
          <h2 id='about'>Proyectos</h2>
          <div className='proyts'>
            {data.sort((a, b) => b.id - a.id).map(item => <MediaCard item={item} />)}
          </div>
        </div>
      </div>

      <div className='glass' style={{ marginTop: '3rem' }} id="Contact">
        <div className='proyContainer'>
          <h2 id='about'>Contacto</h2>
          <h4 style={{ color: 'white', fontFamily: 'Raleway' }}>Enviame un mensaje</h4>
          <ContactUs />
        </div>
      </div>

      <ScrollToTop
        // style={{ backgroundColor: "rgb(63, 136, 197)" }}
        smooth
        component={<ArrowDropUpRoundedIcon fontSize="large" />}
      />
      <ToastContainer position="bottom-left"
            theme='dark'
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover />
    </div>
  );
}
export default App;
