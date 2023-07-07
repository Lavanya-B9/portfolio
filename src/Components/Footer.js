import React, {useRef } from 'react';
import './FooterStyles.css';
import emailjs from '@emailjs/browser';

const Footer = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_uamzppw', 'template_wmuab4d', form.current, 'gOKXKBcVFO2RMbtdf')
        .then((result) => {
            console.log(result.text);
            alert("Your message has been successfully submitted");
  
        }, (error) => {
            console.log(error.text);
        });
    };
   
      
  return (
    <div className='footer-container'>
        <h3>Contact Me</h3>
        <div className='desc-container'>
            <div className='left'>
            <h4>My Contact Information</h4>
           <div className='my-data'>
            <i className='fa-solid fa-user'></i>
            <div>
                <h6>Name</h6>
                <p>Lavnaya Bandaru</p>
            </div>
           </div>
           <div className='my-data'>
            <i className='fa-solid fa-location-dot'></i>
            <div>
                <h6>Adress</h6>
                <p>Andhra Pradesh</p>
            </div>
           </div>
           <div className='my-data'>
            <i className='fa-solid fa-envelope'></i>
            <div>
                <h6>Email</h6>
                <p>lavanyabandaru74@gmail.com</p>
            </div>
           </div>
           <div className='my-data'>
            <i className='fa-brands fa-linkedin'></i>
            <div>
               <h6>Linkedin</h6>
                <p>Lavanya Bandaru</p>
                </div>
           
           </div>
           <div className='my-data'>
            <a href='https://github.com/Lavanya-B9'>
            <i className='fa-brands fa-github'></i>
            </a>
            <div>
                <h6>Github</h6>
                <p>Lavanya-B9</p>
                </div>
            
           </div>
        </div>
     <div>
            <h4>Contact Me</h4>
    <form ref={form} onSubmit={sendEmail}>
     <input type="text" name="from_name" placeholder='Username'/>
      <input type="email" name="from_email" placeholder='Email' />
      <input type="text" name="from_subject" placeholder='Subject' />
      <textarea name="message"  placeholder='Your Message'></textarea>
      <input type="submit" value="Send"   className='btn-dark'/>
    </form>
     </div>
         </div>
       </div>
  )
}

export default Footer