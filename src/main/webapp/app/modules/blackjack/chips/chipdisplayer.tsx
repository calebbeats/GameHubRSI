import React from "react";

import 'chips.scss';

import { RedChips, BlueChips, GreenChips } from "./chips";

export const ChipDisplayer = props => {
  let fiveChip = 0;
  let twentyFiveChip = 0;
  let hundredChip = 0;

  let tot = props.amount;

  const arrChips = [];

  while (tot > 0) {
    if (tot % 100 === 0) {
      hundredChip++;
      arrChips.push(<GreenChips />);
      tot -= 100;
      // return null;
    } else if (tot % 25 === 0) {
      twentyFiveChip++;
      arrChips.push(<BlueChips />);
      tot -= 25;
    } else {
      fiveChip++;
      arrChips.push(<RedChips />);
      tot -= 5;
    }
  }

  console.log(`100: ${hundredChip} 25: ${twentyFiveChip} 5: ${fiveChip}`);

  return <div>{arrChips}</div>;
};
