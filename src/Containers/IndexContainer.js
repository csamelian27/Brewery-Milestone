import React, { Component } from 'react';
import BreweryCard from '../Components/BreweryCard'

class IndexContainer extends Component {

  render(){
    console.log(this.props);
    let breweries = this.props.breweries.map(brewery => <BreweryCard key={brewery.id} brewery={brewery} handleClick={this.props.handleClick} boards={this.props.boards} />)
    return (
      <div className="indexContainer">
        <h1>Index</h1>
        {breweries}
      </div>
    )
  }
}

export default IndexContainer
