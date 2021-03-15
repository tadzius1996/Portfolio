import React, {useEffect} from 'react'
import './About.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

const About = () => {

    useEffect(() => {
        Aos.init({duration: 3000});
      }, []);

    return (
        <div id='About'>
        <div className='aboutContainer' data-aos='fade-up'>
            <img src='/about.jpg' className='imagee'/>
            <div className='about-layover'></div>
            <div className='aboutText'>
            <h1 className='AboutTitle'>About</h1>
            <p className='aboutdescription'>Hey! I'm Tadas, a front end developer based in Vietnam Ha Long city who enjoys creating and building things on the internet. I develop exceptional websites and web apps that provide intuitive / user friendly interfaces. <br /> <br />I am always on the lookout for exciting projects to work on and to provide my full attention to every detail that the project requires.</p>
            <p className='aboutdescription2'>Technologies I'm working with:</p>
            <ul className='aboutList'>
                <li className='aboutItemFirst'>HTML/CSS</li>
                <li className='aboutItem'>React</li>
                <li className='aboutItem'>Javascript</li>
            </ul>
            <img src='/planets.png' className='planets'/>
            <img src='/stars2.png' className='shooting2'/>
            <img src='/shooting.png' className='shooting3'/>
         
            </div>
        </div>
        </div>
    )
}

export default About
