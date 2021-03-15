import React, {useState, useEffect} from 'react'
import './Navbar.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import {Link} from 'react-scroll'
import {BsCloudDownload} from 'react-icons/bs'

export default function Navbar() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        Aos.init({duration: 3000});
      }, []);

    return (
        <>
        <nav className='navbar'>
            <h2 className='logo' data-aos='fade-right'>SPACEFOLIO</h2>
            <ul className='list' style={{transform: open ? 'translateY(0px)' : '' }}>
                <li className='listItemFirst' data-aos='fade-in'>Where to?</li>
                <Link smooth={true} duration={1000} to='About'><li className='listItem' data-aos='fade-right'>About</li></Link>
                <Link smooth={true} duration={1000} to='Projects'><li className='listItem' data-aos='fade-right'>Projects</li></Link>
                <Link smooth={true} duration={1000} to='Contact'><li className='listItem' data-aos='fade-right'>Contact</li></Link>
                
                {open && <div className='footer' data-aos='fade-in'><img src='/media.png' className='media' /> <a>hello@together.agency</a> <br /> <a>+445457683453</a> </div>}
            </ul>
            <img  onClick={() =>setOpen(!open)} src='/bars.png' className='burger' />
        </nav>
        <BsCloudDownload className='download' data-aos='fade-right'/>
        <div className='listItemLast' data-aos='fade-right'>Resume</div>
        </>
    )
}
