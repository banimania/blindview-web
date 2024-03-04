import './../App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

class Mode extends React.Component {
  constructor(props) {
    super();
    this.props = props;
  }
  render() {
    return(
      <div id="mode">
        <h1 id="mode-name">{this.props.name}</h1>
        <p id="mode-description">{this.props.description}</p>
        <p id="mode-keyword">Palabra clave de activación: <strong>{this.props.keyword}</strong></p>
        {this.props.example ?   <p id="mode-example">Ejemplo: <strong>{this.props.example}</strong></p> : ""}
      </div>
    )
  }
}

export default Mode;
