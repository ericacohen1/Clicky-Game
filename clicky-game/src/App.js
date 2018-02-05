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
    images,
    currentScore: 0,
    highScore: 0,
    clicked: [],
    alert: ""
  };

  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState ({ clicked: this.state.clicked.concat(id)});
    }
    else {
      this.handleReset();
    }
  };

  handleIncrement = () => {
   const currentGameScore = this.state.currentScore + 1;
   this.setState({
     currentScore: currentGameScore
   });
   if (currentGameScore >= this.state.highScore) {
     this.setState({ highScore: currentGameScore });
   }
  //   this.setState({ currentScore: this.state.currentScore + 1 });
  //   if (currentScore >= this.state.highScore) {
  //     this.setState({ highScore: currentScore });
  //   }
    else if (currentGameScore === 12) {
        this.setState({ alert: "YOU WON!!" });
      }
    }

  handleReset = () => {
    this.setState({
      currentScore: 0,
      highScore: this.state.highScore,
      clicked: []
    })
  };

  render() {
    return (
      <Wrapper>
      <p>Current Score: {this.state.currentScore}</p>
      <p>High Score: {this.state.highScore}</p>
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
