import React, { Component } from 'react';

class BreweryCard extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="breweryCard">
        <h3>{this.props.brewery.name}</h3>
        <p>Type: {this.props.brewery.brewery_type}</p>
        <p>Address: {this.props.brewery.street}, {this.props.brewery.city}, {this.props.brewery.state}</p>
        <p>Phone #: {this.props.brewery.phone}</p>
        <a href={this.props.brewery.website_url} target="_blank" rel="noopener noreferrer">Visit {this.props.brewery.name}'s Website</a>

        <div>
          {this.props.boards ? <select name="boards" className="dropdown">
            <option>Select a Board</option>
            { this.props.boards.map((board, index) => <option key={index} value={board.boardName}>{board.boardName}</option>) }
          </select> : null}
          {this.props.boards ? <button onClick={(e) => this.props.handleClick(this.props.brewery, e.target.parentElement.children[0].value)}>Add</button> : null}
        </div>
      </div>
    )
  }
}

export default BreweryCard
