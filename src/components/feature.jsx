import './../App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

class Feature extends React.Component {
  render() {
    return(
      <div id="feature">
        <img src={this.props.icon} alt={this.props.name} id="icon"/>
        <h1 id="name">{this.props.name}</h1>
        <p id="description">{this.props.description}</p>
      </div>
    )
  }
}

export default Feature;
