import React, {useState, useEffect} from 'react'
import './Navbar.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import {Link} from 'react-router-dom'

export default function Navbar() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        Aos.init({duration: 3000});
      }, []);

    return (
        <nav className='navbar'>
            <h2 className='logo'>LOGOS</h2>
            <ul className='list' style={{transform: open ? 'translateY(0px)' : '' }}>
                <li className='listItemFirst' data-aos='fade-in'>Where to?</li>
                <Link to='/work'><li className='listItem' data-aos='fade-right'>Work</li></Link>
                <Link to='/services'><li className='listItem' data-aos='fade-right'>Services</li></Link>
                <Link to='/about'><li className='listItem' data-aos='fade-right'>About</li></Link>
                <Link to='/careers'><li className='listItem' data-aos='fade-right'>Careers</li></Link>
                <Link to='/contact'><li className='listItem' data-aos='fade-right'>Contact</li></Link>
                {open && <div className='footer' data-aos='fade-in'><img src='/media.png' className='media' /> <a>hello@together.agency</a> <br /> <a>+445457683453</a> </div>}
            </ul>
            <img  onClick={() =>setOpen(!open)} src='/bars.png' className='burger' />
        </nav>
    )
}
