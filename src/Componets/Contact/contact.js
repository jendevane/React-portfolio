import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';



const Contact = () => {
    const ref = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', ref.current, 'YOUR_USER_ID')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
    
      <div className="contact" id='contact'>
            <div className="contact-bg"></div>
            <div className='contact-wrapper'>
                <div className='contact-left'></div>
                <h1> contact me</h1>
                <div className='contact-info'>
                    <div className='contact-info-item'>
                        Phone:999-999-999
                    </div>
                    <div className='contact-info-item'>
                        Email:contact@contact.com
                    </div>
                </div>
            </div>
            <div className='contact-right'>
                <p className='contact-description'>
                    <b>Wanna reach out?</b>
                </p>
                <form ref={ref} onSubmit={handleSubmit}>
                    <input type="text" placeholder='name' name='user_name' />
                    <input type="text" placeholder='subject' name='user_subject' />
                    <input type="text" placeholder='Email' name='user_email' />
                    <textarea rows="7" placeholder="message" name='message' />
                    <button> Send </button>
                </form>

            </div>

        </div>








    );
}

export default Contact
