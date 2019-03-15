import React, { Component } from 'react';

class BreweryCard extends Component {
  render() {
    return (
      <div>{this.props.brewery.name}</div>
    )
  }
}

export default BreweryCard
