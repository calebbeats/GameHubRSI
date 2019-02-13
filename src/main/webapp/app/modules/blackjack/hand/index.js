import React, { Component } from "react";
import Card from '../Card'

class Hand extends Component {
  state = {
    cards: []
  }
  getRandomCard = () => {
    const suits = ['H', 'D', 'C', 'S'];
    const cards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const product = (a, b) => b.reduce((acc, e1) => acc.concat(a.map(e => [e1 , e])), []);
    const randomCard = this.shuffle(product(suits, cards))[0];
    return randomCard;
  }

  hitMe = () => {
    this.setState({cards: this.state.cards.concat([this.getRandomCard()])})
  }

  shuffle = (array) => {
      array = [...array];
      let currentIndex = array.length;
      let temporaryValue;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {

          // Pick a remaining element...
          const randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;

          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
      }
      return array;
  }
  render() {
   
    return (
      <div className="App">
        {/* rows: hearts, diamond, clubs, spades */}
        {/* row 2:  2 through A*/}
        <div 
        style={{display: 'flex'}}>
        {this.state.cards.map((arg, _, inputArr) => {
          console.log(arg, inputArr)
          return <Card suit={arg[1]} card={arg[0]} />
        })}

        </div>
        <button onClick={this.hitMe}>Hit Me!</button>
      </div>
    );
  }
}

export default Hand;
