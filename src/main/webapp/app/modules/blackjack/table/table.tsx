import React, {Component} from "react";

import "../table/table.scss";

class BlackjackTable extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <button>Start Game</button>
        <div className="tableJack">
          <div className="tableJackText">
            <span className="letters l1">B</span>
            <span className="letters l2">L</span>
            <span className="letters l3">A</span>
            <span className="letters l4">C</span>
            <span className="letters l5">K</span>
            <span className="letters l6">J</span>
            <span className="letters l7">A</span>
            <span className="letters l8">C</span>
            <span className="letters l9">K</span>
          </div>
        </div>
      </>
    )
  }
}

export default BlackjackTable;