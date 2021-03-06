//imports dependencies and files
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import FriendCard from "./components/FriendCard";
import Footer from "./components/Footer";
import kitten from "./kitten.json";
import "./App.css";
//import shake from 'react-animations/lib/shake';

//sets state to 0 or empty
class App extends Component {
  state = {
    kitten,
    clickedKitten: [],
    score: 0,
    topScore: 0,
    msg: "A Cute & Cuddly MEOWmory Game"
  };

//when you click on a card ... the kitten is taken out of the array
  imageClick = event => {
    const currentKitten = event.target.alt;
    const KittenAlreadyClicked =
      this.state.clickedKitten.indexOf(currentKitten) > -1;

//if you click on a kitten that has already been selected, the game is reset and cards reordered
    if (KittenAlreadyClicked) {
      this.setState({
        kitten: this.state.kitten.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedKitten: [],
        topScore: (this.state.score > this.state.topScore) ? this.state.score: this.state.topScore,
        score: 0,
        msg: "You Already Clicked MEOW!  Play again?"
      });
       // alert("You lose. Play again?");

//if you click on an available kitten, your score is increased and cards reordered
    } else {
      this.setState(
        {
          kitten: this.state.kitten.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedKitten: this.state.clickedKitten.concat(
            currentKitten
          ),
          score: this.state.score + 1,
          msg: "MEOW Clicked a New Kitten!"
        },
//if you get all 12 kitten corrent you get a congrats message and the game resets        
        () => {
          if (this.state.score === 12) {
           // alert("Meeeoow! You Win!");
            this.setState({
              kitten: this.state.kitten.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              clickedKitten: [],
              score: 0,
              msg: "MEEEOOOOW!  You Win!"
            });
          }
        }
      );
    }
  };

//the order of components to be rendered: navbar, jumbotron, friendcard, footer 
  render() {
    return (
      <div className="wrapper">
        <Navbar msg={this.state.msg} score={this.state.score} topScore={this.state.topScore}/>
        <Jumbotron />
        <div className="wrapper">
          {this.state.kitten.map(kitten => (
            <FriendCard
              imageClick={this.imageClick}
              id={kitten.id}
              key={kitten.id}
              image={kitten.image}
            />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;

