import React from 'react'
import './Footer.css'
import {FaGithub} from 'react-icons/fa';
import {AiOutlineInstagram} from 'react-icons/ai';
import {AiOutlineFacebook} from 'react-icons/ai';

export const Footer = () => {
    return (
        <>
        <div className='footer'>
           <h5 className='footer-credit'>Built by Tadas Miloncius</h5>
        </div>
        <div className='social-mediaaa'>
        <a className='githubb' href='https://github.com/tadzius1996/e-commerce-website'><FaGithub /></a>
        <a className='githubb' href='https://www.instagram.com/tiloncius/?hl=en'><AiOutlineInstagram /></a>
        <a className='githubb' href='https://www.facebook.com/tadas.miloncius/'><AiOutlineFacebook/></a>
      </div>
      </>
    )
}
