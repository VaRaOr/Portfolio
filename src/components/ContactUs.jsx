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
    <div className="wrapper">
    <div className="inner">
      <form ref={form} onSubmit={sendEmail}>
        <label className="form-group">
          <input type="text" name="user_name" className="form-control"  required/>
          <span>Nombre</span>
          <span className="border"></span>
        </label>
        <label className="form-group">
          <input type="text" name="user_email" className="form-control"  required/>
          <span>Email</span>
          <span className="border"></span>
        </label>
        <label className="form-group" >
          <textarea name="message" className="form-control" required></textarea>
          <span>Mensaje</span>
          <span className="border"></span>
        </label>
        <button type="submit" value="Send">Enviar 
          <i className="zmdi zmdi-arrow-right"></i>
        </button>
      </form>
    </div>
  </div>
  );
};