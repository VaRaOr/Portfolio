import './styles/App.css';
import Main from './components/Main';
import NavBar from './components/NavBar.jsx'
import About from './components/About';
import Technologies from './components/Technologies';

function App() {
  return (
    <div className="App">
    <NavBar/>
    <Main/>
    <About/>
    <Technologies/>
    </div>
  );
}
export default App;
