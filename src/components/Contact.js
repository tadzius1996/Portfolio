import React, {useEffect} from 'react'
import './Contact.css'
import {MdContactMail} from 'react-icons/md'
import Aos from 'aos'
import 'aos/dist/aos.css'

function Contact() {

    useEffect(() => {
        Aos.init({duration: 3000});
      }, []);

    return (
        <div id='Contact' className='contact-container'>
        <h1 className='contacts' data-aos='fade-up'>Contacts</h1>
        <img src='/rocket.png' className='rocket' data-aos='fade-in'/>
        <img src='/stars2.png' className='starss' data-aos='fade-up'/>
        <img src='/stars2.png' className='starss2' data-aos='fade-up'/>
        <img src='/stars2.png' className='starss3' data-aos='fade-up'/>
        <div className='contactContainer' data-aos='fade-up'>
            <MdContactMail className='awesome' />
            <div className='contactForm'>
            <h2 className='contact-title'>Get In Touch</h2>
            <p className='contact-text'>If you would like to get in touch you can do so by sendming me a message! I am really excited to hear from you!</p>
            </div>
            <button className='contact-btn'><a className='contact-form' href='https://www.facebook.com/tadas.miloncius/'>Reach Out</a></button>
        </div>
        </div>
    )
}

export default Contact
