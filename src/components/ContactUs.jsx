import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/style.css'
export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_obfzy8s', 'template_hgge812', form.current, 'dI4Ae3szKK-DX0i9C')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
  };

  return (
    <form ref={form} className='formC' onSubmit={sendEmail}>
      <input type="text" name="user_name" placeholder='Nombre' className="input" required />
      <input type="text" name="user_email" placeholder='Email' className="input" required />
      <textarea name="message" className="input" placeholder='Mensaje...' required style={{ resize: 'none' }}></textarea>
      {/* <button type="submit" className='XD' value="Send">Enviar</button> */}
      <button type="submit" className='button' value="Send" >
        <div class="svg-wrapper-1">
          <div class="svg-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
            </svg>
          </div>
        </div>
        <span>Enviar</span>
      </button>
    </form>
  );
};