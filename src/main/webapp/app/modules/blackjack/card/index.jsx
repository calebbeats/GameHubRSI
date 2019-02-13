import React, {Component} from 'react';
import cards from "./cards/cards.png";

class Card extends Component {
    suits = ["H", "D", "C", "S"];
    cards = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    render() {
      return (
        <div
        style={{
          background: `url(${cards})`,
          backgroundPosition: `-${this.cards.indexOf(this.props.card)*73}px -${this.suits.indexOf(this.props.suit)*84}px`,
          width: '62px',
          height: '78px',
          margin: '2px'
        }}
        ></div>
      );
    }
  }

  export default Card;