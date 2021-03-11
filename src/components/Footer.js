import React from 'react'
import './Footer.css'

export const Footer = () => {
    return (
        <div className='mt-xxxl '>
            <div className='containerr'>
                <div className='container BorderBottom'>
                    <div className='container2'>
                   <h1 className='footerText'>Let's make something new.</h1>
                   <button className='button'>Contact us</button>
                   </div>
                </div>
            </div>
            <div className='container3'>
            <div className='container4'>
                <div className='head'>
                  <h3 className='heading'>Made in London.</h3>
                  <p className='subHeading2'>15-19 Bloomsbury Way, <br />Holborn, London WC1A 2TH</p>
                  <p className='subHeading'>+44(0)2078673712</p>
                  <p className='subHeading'>hello@together.agency</p>
                  <p className='subHeadingLast'>© Together 2021</p>                        
                  </div>
                  <div className='subHead'>
                  <ul className='listItems'>
                    <li className='item'>Work</li>
                    <li className='item'>Services</li>
                    <li className='item'>About</li>
                    <li className='item'>Careers</li>
                    <li className='item'>Contact</li>
                  </ul>
                  <p className='input'>Interesting updates delivered occasionally.</p>
                  <form className='form'>
                  <input className='inputBar' placeholder='Sign up for our newsletter'></input>
                  <button className='inputBtn'>Join</button>
                  </form>
                  <div className='flex'>
                  <p className='lastHeading'>Dribbble</p>
                  <p className='lastHeading'>Instagram</p>
                  <p className='lastHeading'>Linkedin</p>
                  <div className='last'>
                  <p className='lastHeading2'>Privacy</p>
                  <p className='lastHeading2'>Terms</p>
                  </div>
                  </div>
                </div>
            </div>
            </div>
        </div>
    )
}
