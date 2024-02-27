import './App.css';
import React from 'react';
import ReactPlayer from 'react-player';
import Feature from "./components/feature.jsx";

function App() {
  return (
    <React.Fragment>
      <h1 class="name">BlindView</h1>
      <h2 class="subtitle">Una interfaz de audio para personas invidentes</h2>

      <div id="videodiv">
        <div id="text">
          <h2 class="whatisit">¿Qué es BlindView?</h2>
          <p class="blindview">BlindView es una aplicación Android específicamente diseñada para asistir y aumentar la independencia de las personas invidentes.<br/><br/> La aplicación utiliza la cámara y el sensor GPS del dispositivo con el fin de orientar al usuario en su entorno físico de forma precisa y en tiempo real, mediante tecnología texto-a-voz e inteligencia artificial, la cual puede ser controlada a través de una sencilla y accesible interfaz de audio compuesta por varios modos y comandos.</p>
        </div>
        <ReactPlayer url="https://streamable.com/wb5vnt" height='auto'/>
      </div>

      <h2 class="benefits">Ventajas</h2>
      <div id="wrapper">
        <Feature name="Accesibilidad" description="Nuestra sencilla interfaz de audio permite compartir el poder y los beneficios de la inteligencia artificial a todo el mundo." icon="./icons/accesibilidad.png"/>
        <Feature name="Uso gratuito" description="A diferencia de muchas otras soluciones, esta aplicación es de uso gratuito y de código abierto. Además, es posible administrar las claves utilizadas." icon="./icons/dollar.png"/>
        <Feature name="Integración" description="Nuestra interfaz puede hacer uso de ciertas funciones como la ubicación o el giroscopio, con el objetivo de orientar al usuario en el espacio que lo rodea." icon="./icons/gps.png"/>
        <Feature name="Modos" description="La interfaz proporciona una gran variedad de modos con diferentes funcionalidades y activables mediante palabras clave que son accesibles mediante un menú." icon="./icons/settings.png"/>
      </div>
    </React.Fragment>
  );
}

export default App;
