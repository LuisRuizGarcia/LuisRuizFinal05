import React from 'react';
import './about.css';

const About = () => {
  return (
    <div className="about-me-container">
      <h1>Acerca de mí</h1>
      <div className="about-me-content">
        <p>¡Hola! Soy Luis Ruiz, y este es mi proyecto del módulo 5.</p>
        <p>Intente hacer el proyecto con una Api distinta sin embargo, por algunos parametros me fue muy complejo
          seguir, por lo que decidi seguir las clases y agregarle algunos detalles.
        </p>
      
        <h2>Contacto</h2>
        <p>Si deseas ponerte en contacto conmigo, puedes enviarme un correo electrónico a <a href="mailto:luis_ar_garcia@hotmail.com?subject=Hola, tienes 10 en tu proyecto" >luis_ar_garcia@hotmail.com</a> o seguirme en mis redes sociales:</p>
        <ul>
          <li><a href="https://www.linkedin.com/in/luis-antonio-ruiz-garcia-35515399/" target="_blank">LinkedIn</a></li>
          <li><a href="https://www.instagram.com/luisfishruiz/" target="_blank">Instagram</a></li>
        </ul>
      </div>
    </div>
  );
}
export default About;
