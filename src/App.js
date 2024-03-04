import './App.css';
import React from 'react';
import Feature from "./components/feature.jsx";
import Mode from "./components/mode.jsx";
import Memoria from "./components/memoria.jsx"

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
        <video src="ad.mp4" id="video" controls></video>
      </div>

      <h2 class="benefits">Ventajas</h2>
      <div id="wrapper">
        <Feature name="Accesibilidad" description="Nuestra sencilla interfaz de audio integrada nos permite compartir los grandes avances y beneficios de la inteligencia artificial con todo el mundo." icon="./icons/accesibilidad.png"/>
        <Feature name="Uso gratuito" description="A diferencia de muchas otras soluciones, esta aplicación es de uso gratuito y de código abierto. Además, es posible administrar las claves utilizadas." icon="./icons/dollar.png"/>
        <Feature name="Integración" description="Nuestra interfaz puede hacer uso de ciertas funciones como la ubicación o el giroscopio, con el objetivo de orientar al usuario en el espacio que lo rodea." icon="./icons/gps.png"/>
        <Feature name="Modos" description="La interfaz proporciona una gran variedad de modos con diferentes funcionalidades y activables mediante palabras clave que son accesibles mediante un menú." icon="./icons/settings.png"/>
      </div>

      <h2 class="modes">Modos</h2>
      <div id="wrapper-modes">
        <Mode name="Orientación" keyword="orientación" description="Cuando este modo está activado, el dispositivo realiza fotografías cada 20 segundos y describe el ambiente visto por la cámara, advirtiendo al usuario de cualquier peligro en el camino."/>
        <Mode name="Indicaciones" keyword="indicaciones" description="Una vez se activa este modo, la interfaz preguntará al usuario a dónde desea ir. Para el correcto funcionamiento de este modo, es necesario activar la ubicación del dispositivo. La interfaz le recordará las indicaciones desde su ubicación actual cuando el usuario diga 'actualizar ruta'."/>
        <Mode name="Semáforos" keyword="semáforos" description="Este comando toma una fotografía a través de la cámara e identifica todos los semáforos presentes en la imagen captada, informando al usuario del estado de los mismos y de cualquier obstáculo."/>
        <Mode name="Pregunta" example="pregunta ¿Cuánto es 10x3?" keyword="pregunta" description="En el caso de que el usuario quiera acceder a la inteligencia artificial de texto, podrá realizar preguntas a través de este comando, obteniendo un tiempo de respuesta mucho mejor que si enviase la imagen."/>
        <Mode name="Modo libre" example="¿De qué color es el suelo?" keyword="Ninguna" description="Si ninguna funcionalidad se adecúa a las necesidades del usuario, será posible utilizar el modo libre para mandar la imagen vista por la cámara a la inteligencia artificial, acompañada por las indicaciones del usuario."/>
        <Mode name="Menú" keyword="menú" description="Lee los modos y comandos disponibles."/>
      </div>

      <Memoria/>
    </React.Fragment>
  );
}

export default App;
