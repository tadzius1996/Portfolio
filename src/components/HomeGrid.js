import React, {useEffect} from 'react'
import './HomeGrid.css'
import {FaGithub} from 'react-icons/fa'
import Aos from 'aos'
import 'aos/dist/aos.css'

export const HomeGrid = () => {

  useEffect(() => {
    Aos.init({duration: 3000});
  }, []);

    return (
      <div id='Projects'>
        <div className='homeContainer'>
        <img src='/stars2.png' className='shootingStars'/>
        <img src='/stars2.png' className='shootingStars2'/>
          
          <div className='projectsContainer'>
          <h1 className='gridTitle' data-aos='fade-up'>Projects</h1>
          <div className='projectHolder' data-aos='fade-up'>
          <div className='project-frame'></div>
          <div className='projectDescription'>
            <h2 className='projectName'>E-COMMERCE WEBSITE</h2>
            <p className='projectText'>The website interface provides you with the ability of viewing different products (fetched from an external API). You can add your product to the cart and the price total will be calculated there. The website has a user authentication functionality. Once registered and logged in you are presented with a user dashboard where you're able to update account / shipping details and view your order list. </p>
            <div className='technologiesContainer'>
            <p className='technologies'>*Authentication  *API </p>
            <a className='github' href='https://github.com/tadzius1996/e-commerce-website'><FaGithub /></a>
            </div>
            </div>
            </div>

            <div className='projectHolder2' data-aos='fade-up'>
          <div className='projectDescription2'>
            <h2 className='projectName'>e-commerce</h2>
            <p className='projectText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores sequi non excepturi nihil nemo labore est consequuntur ad, id eum ducimus natus magni quo? Aliquid incidunt minima facilis veritatis odio.</p>
            <div className='technologiesContainer'>
            <p className='technologies'>*Authentication  *API </p>
            <a className='github' href='https://github.com/tadzius1996/e-commerce-website'><FaGithub /></a>
            </div>
            </div>
            <div className='project-frame2'><a href='https://commerce-website.herokuapp.com/'><img className='commerce' src='/commerce.png' /></a></div>
            </div>
          </div>
        </div>
        </div>
    )
}
