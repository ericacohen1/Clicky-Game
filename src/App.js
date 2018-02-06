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

  handleShuffle = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
  }

  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState ({ clicked: this.state.clicked.concat(id)});
      this.handleShuffle(images);
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
      <container>
      <div class="jumbotron">
        <h1>Clicky Game</h1>
        <h4>Click any fruit to begin.  Then click on a different image.  The game will end if you select a duplicate image.</h4>
        <p>Current Score: {this.state.currentScore}</p>
        <p>High Score: {this.state.highScore}</p>
      </div>
      </container>
      {this.state.images.map(images => (
      <FruitCard
      handleClick={this.handleClick}
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
