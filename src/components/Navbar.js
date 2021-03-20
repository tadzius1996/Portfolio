import React, {useState, useEffect, useRef} from 'react'
import './Navbar.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import {Link} from 'react-scroll'
import {BsCloudDownload} from 'react-icons/bs'
import {FaBars} from 'react-icons/fa'
import {AiOutlineClose} from 'react-icons/ai'
import {FaGithub} from 'react-icons/fa';
import {AiOutlineInstagram} from 'react-icons/ai';
import {AiOutlineFacebook} from 'react-icons/ai';

export default function Navbar() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        Aos.init({duration: 3000});
      }, []);

      let prevScrollpos = window.pageYOffset;
      window.onscroll = function() {

      let currentScrollpos = window.pageYOffset;
      if(prevScrollpos > currentScrollpos) {
          document.getElementById('navbar').style.top = '0';
      } else {
          document.getElementById('navbar').style.top = '-100px';
      }
      prevScrollpos = currentScrollpos;
      }

    return (
        <>
        {open ? <div className='oveeer' onClick={() => setOpen(!open)}></div> : ''}
        <nav className='navbar' id='navbar'>
            <h2 className='logo' data-aos='fade-top'>SPACEFOLIO</h2>
            <div className='nav-container'>
            <ul className='list' style={{width: open ? '55vh' : '0vh' }}>
                <li className='listItemFirst' data-aos='fade-in'>Where to?</li>
                <Link smooth={true} duration={1000} to='About'><li className='listItem' data-aos='fade-top'>About</li></Link>
                <Link smooth={true} duration={1000} to='Projects'><li className='listItem' data-aos='fade-top'>Projects</li></Link>
                <Link smooth={true} duration={1000} to='Contact'><li className='listItem' data-aos='fade-top'>Contact</li></Link>
                <li className='listItemLast' data-aos='fade-top'>Resume</li>
                {open ? <AiOutlineClose className='burgerOpen' onClick={() => setOpen(!open)}/> : ''}
                <div className='social-mediaaaa'>
        <a className='githubb' href='https://github.com/tadzius1996/e-commerce-website'><FaGithub /></a>
        <a className='githubb' href='https://www.instagram.com/tiloncius/?hl=en'><AiOutlineInstagram /></a>
        <a className='githubb' href='https://www.facebook.com/tadas.miloncius/'><AiOutlineFacebook/></a>
      </div>
            </ul>
            
            </div>
            <FaBars className='burger' onClick={() => setOpen(!open)} style={{display: open && 'none'}}/> 
        </nav>
        
        </>
    )
}
