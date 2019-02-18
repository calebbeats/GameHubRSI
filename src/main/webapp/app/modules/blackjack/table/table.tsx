import React, { Component } from 'react';

import '../table/table.scss';

class BlackjackTable extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="tableJack">
        <img src={require('./images/blackjack_table.svg')} />
      </div>
    );
  }
}

export default BlackjackTable;
