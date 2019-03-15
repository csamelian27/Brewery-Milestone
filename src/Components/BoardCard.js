import React, { Component } from 'react';
import BreweryCard from './BreweryCard'

class BoardCard extends Component {
  render() {
    return (
      <div className="boardCard">
        <h3>{this.props.board.boardName}</h3>
      </div>
    )
  }
}

export default BoardCard
