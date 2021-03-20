import React, {useEffect} from 'react'
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HomeGrid } from "./components/HomeGrid";
import { Footer } from "./components/Footer";
import About from "./components/About";
import Contact from './components/Contact';
import {FaGithub} from 'react-icons/fa';
import {AiOutlineInstagram} from 'react-icons/ai';
import {AiOutlineFacebook} from 'react-icons/ai';
import {Link} from 'react-scroll'
import Aos from 'aos'

function App() {

  useEffect(() => {
    Aos.init({duration: 3000});
  }, []);

  return (
    <div className='bigContainer'>
    <ul className='social-media' data-aos='fade-left'>
      <li><a className='github' href='https://github.com/tadzius1996/e-commerce-website'><FaGithub /></a></li>
      <li><a className='github' href='https://www.instagram.com/tiloncius/?hl=en'><AiOutlineInstagram /></a></li>
      <li><a className='github' href='https://www.facebook.com/tadas.miloncius/'><AiOutlineFacebook/></a></li>
    </ul>
    <h2 className='email'>milonciustadas@gmail.com</h2>
    <div className='mainContainer'>
      <Router>
      <Navbar />
      <div className='nav-push'>
      <img src='/spaceMann.svg' className='astroo' data-aos='fade-up'/>
      <img src='/Group 44.png' className='shark4' data-aos='fade-left'/>
      <img src='/stars2.png' className='shark3' data-aos='fade-up'/>
      <img src='/stars2.png' className='stars'  data-aos='fade-up'/>
      <img src='/stars2.png' className='starsNew'  data-aos='fade-up'/>
      <img src='/shooting.png' className='shootingBalls'/>
      <img src='/shooting.png' className='shootingBalls2'/>
      <img src='/stars2.png' className='shark2'  data-aos='fade-up'/>
      <img src='/stars2.png' className='shark'  data-aos='fade-up'/>
      </div>
      
      
      <div className='titlee'>
      <div className='title-flex'><h2 data-aos='fade-in' className='title' data-aos='fade-right'><span className='span'>Hello,  my name is</span><br/><br/>Tadas</h2><span className='title-span' data-aos='fade-right'>and I develop the internet</span></div>
      <h3 data-aos='fade-in' className='titleLower' data-aos='fade-right'>As a front end developer I create & build high quality<br /> websites and applications.</h3>
      <Link smooth={true} duration={1000} to='Projects'><button data-aos='fade-in' className='mainButton' data-aos='fade-right'>My Work</button></Link>
      </div>
      <Switch>
      <div className='container'>
        <About />
        <HomeGrid />
        <Contact />
      </div>
      </Switch>
      <Footer />
      </Router>
    </div>
    </div>
  );
}

export default App;

