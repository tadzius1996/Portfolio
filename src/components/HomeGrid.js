import React, {useEffect} from 'react'
import './HomeGrid.css'
import {FaGithub} from 'react-icons/fa'
import Aos from 'aos'
import 'aos/dist/aos.css'
import {CgWorkAlt} from 'react-icons/cg'

export const HomeGrid = () => {

  useEffect(() => {
    Aos.init({duration: 3000});
  }, []);

    return (
      <div>
        <div className='homeContainer'>
        <img src='/stars2.png' className='shootingStars'/>
        <img src='/stars2.png' className='shootingStars2'/>
          
          <div className='projectsContainer'>
            <div className='project-div' data-aos='fade-up' id='Projects'>
              <CgWorkAlt className='awesomee'/>
          <h1 className='gridTitle'>My Work</h1>
          </div>
          <div className='projectHolder' data-aos='fade-up'>
          <div className='project-frame'><a href='https://commerce-website.herokuapp.com/'><img className='commerce' src='/commerce.PNG' /></a></div>
          <a href='https://commerce-website.herokuapp.com/'><img className='commercee' src='/commerce.PNG' /></a>
          <div className='projectDescription'>
            <h2 className='projectName'>E-COMMERCE WEBSITE</h2>
            <p className='projectText'>The website interface provides you with the ability of viewing different products (fetched from an external API). You can add your product to the cart and the price total will be calculated there. The website has a user authentication functionality. Once registered and logged in you are presented with a user dashboard where you're able to update account / shipping details and view your order list. </p>
            <div className='technologiesContainer'>
            <p className='technologies'>*Authentication  *API </p>
            <a className='github' href='https://github.com/tadzius1996/e-commerce-website'><FaGithub /></a>
            </div>
            </div>
            </div>

          
          </div>
        </div>
        </div>
    )
}
