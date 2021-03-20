import React, {useEffect} from 'react'
import './Contact.css'
import {MdContactMail} from 'react-icons/md'
import Aos from 'aos'
import 'aos/dist/aos.css'
import emailjs from 'emailjs-com';

function Contact() {

    function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_oafy2pm', 'template_u8wrh0v', e.target, 'user_Nl2UemyNOb9Alp8IHVeMi')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
    }

    useEffect(() => {
        Aos.init({duration: 3000});
      }, []);

    return (
        <>
        <div id='Contact' className='contact-container'>
            <div className='contact-div' data-aos='fade-up'>
            <MdContactMail className='awesome' />
        <h1 className='contacts'>Get In Touch</h1>
        </div>
        <img src='/stars2.png' className='starss4' data-aos='fade-up'/>
        <img src='/stars2.png' className='starss5' data-aos='fade-up'/>
        <img src='/stars2.png' className='starss' data-aos='fade-up'/>
        <img src='/stars2.png' className='starss2' data-aos='fade-up'/>
        <img src='/stars2.png' className='starss3' data-aos='fade-up'/>
        <form onSubmit={sendEmail} className='contactContainer' data-aos='fade-up'>
            
            <div className='contactForm'>
            <input type="text" className="form-control" name="name" autocomplete="off" required/>
                        <label for='name' className='label-name'>
                            <span class='content-name'>Name</span>
                        </label>
                          <input type="email" className="form-control" name="email" autocomplete="off" required/>
                        <label for='email' className='label-name'>
                            <span class='content-name'>Email</span>
                        </label>
                          <input type="text" className="form-control" name="subject" autocomplete="off" required/>
                        <label for='subject' className='label-name'>
                            <span class='content-name'>Subject</span>
                        </label>
                          <textarea className="form-message" id="" cols="30" rows="8" name="message" required></textarea>
                        <label for='subject' className='label-name'>
                            <span class='content-message'>Message</span>
                        </label>
                        <div className="col-8 pt-3 mx-auto">
                            <input type="submit" className="contact-btn" value="Get in touch!"></input>
                        </div>
                </div> 
        </form>
        </div>
        </>
    )
}

export default Contact
