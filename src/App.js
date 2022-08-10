import './styles/App.css';
import Main from './components/Main';
import NavBar from './components/NavBar.jsx'
import About from './components/About';
import Technologies from './components/Technologies';
import MediaCard from './components/card';
import data from './JSON/data.json'
function App() {
  return (
    <div className="App">
      <NavBar />
      <Main />
      <div className='glass'>
        <About />
      </div>
      <div className='glass' style={{marginTop:'3rem'}}>
      <Technologies/>
      </div>
      <div className='glass cards' style={{marginTop:'3rem'}}>
      <div className='proyContainer'>
      <h2 id='about'>Proyectos</h2>
        <div className='proyts'>
      {data.sort((a,b)=> b.id - a.id).map(item =><MediaCard item={item} />)}
        </div>
        </div>
      </div>
    </div>
  );
}
export default App;
