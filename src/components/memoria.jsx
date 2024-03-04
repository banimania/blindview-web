import './../App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

class Feature extends React.Component {
  render() {
    return(
      <div id="memoria">
        <a id="link" href="/blindview-web/memoria.pdf">Clica aquí para acceder a la memoria de la aplicación</a>
      </div>
    )
  }
}

export default Feature;
