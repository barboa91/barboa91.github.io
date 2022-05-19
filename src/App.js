// import logo from './logo.svg';
import './App.css';
// import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Socials from './components/Socials';
import Splash from './pages/Splash';
import { Route, Routes } from 'react-router-dom';



function App() {
  return (
          <div className="App">
            <Routes>
              <Route path = "/" element = {<Splash/>}></Route>
              <Route path = "/socials" element = {<Socials/>}></Route>
              
            </Routes>
            <footer>
              
            <Skills/>
            <div>Copyright &copy; Alex Barbosa </div>
              
              </footer>
          </div>
  );
}

export default App;
