import './App.css';
// import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Socials from './components/Socials';
import Splash from './pages/Splash';
import Splash2 from './pages/Splash2'
import AboutMe from './components/AboutMe';
import { Route, Routes } from 'react-router-dom';



function App() {
  return (
          <div className="App">

            <Routes>
              <Route path = "/" element = {<Splash/>}></Route>
              <Route path = "/1" element = {<Splash2/>}></Route>
              <Route path = "/aboutme" element = {<AboutMe/>}></Route>

              <Route path = "/socials" element = {<Socials/>}></Route>
              
            </Routes>
            {/* <AboutMe/> */}

            <footer>
              
            <Skills/>
            Copyright &copy; Alex Barbosa 
              </footer>
          </div>
  );
}

export default App;
