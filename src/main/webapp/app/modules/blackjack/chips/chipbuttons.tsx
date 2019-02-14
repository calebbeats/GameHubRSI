import React from 'react';

import './chipbuttons.css';

export const TotalBet = props => {
  return <div className="total">Money: ${props.money}</div>;
};
export const FiveBet = () => {
  return (
    <div className="fivebet">
      <div>$5</div>
    </div>
  );
};
export const TwentyFiveBet = () => {
  return (
    <div className="twentyfivebet">
      <div>$25</div>
    </div>
  );
};
export const HundredBet = () => {
  return (
    <div className="hundredbet">
      <div>$100</div>
    </div>
  );
};
