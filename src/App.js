import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Socials from './components/Socials';
import { Link, Route, Routes } from 'react-router-dom';



function App() {
  return (
          <div className="App">
              <div className='biglongdiv'> some stuff</div>        


            <div display="flex" text-align="center">
              <Socials/>
            </div>
            <Navbar/>
            <Link to="/">TEST</Link>
              <div id="content">
                <div id="aboutmecontent">
                  pippqiwjdpqjwidqwpjdqwjpid
                </div>
              </div>   
            <footer>Copyright &copy; Alex Barbosa <br/>Built with <img src={logo} className="App-logo" alt="logo"/></footer>
          </div>
  );
}

export default App;
