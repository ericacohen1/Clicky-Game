import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import images from "./images.json";
import FruitCard from "./components/FruitCard"; 
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";


class App extends Component {
  // Setting this.state.friends to the images json array
  state = {
    images
  };

  render() {
    return (
      <Wrapper>
      {this.state.images.map(images => (
      <FruitCard
      key={images.id}
      id={images.id}
      image={images.image}
      />
      ))}
      </Wrapper>
    );
  }
}

export default App;
