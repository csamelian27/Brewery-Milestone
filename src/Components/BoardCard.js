import React, { Component } from 'react';
import BreweryCard from './BreweryCard'

class BoardCard extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="boardCard">
        <h3>{this.props.board.boardName}</h3>
        {this.props.board.brews.length ? this.props.board.brews.map(brewery => <BreweryCard key={brewery.id} brewery={brewery} />) : null}
      </div>
    )
  }
}

export default BoardCard
