import React, { Component } from 'react';
import './App.css';
import IndexContainer from './Containers/IndexContainer'
import BoardContainer from './Containers/BoardContainer'

class App extends Component {

  state = {
    breweries: [],
    boards: []
  }

  componentDidMount() {
    fetch('https://api.openbrewerydb.org/breweries')
      .then(resp => resp.json())
      .then(breweries => this.setState({ breweries }))
  }

  handleSubmit = (boardInfo) => {
    this.setState({
      boards: [boardInfo, ...this.state.boards]
    })
  }

  handleClick = () => {
    
  }

  render() {
    console.log(this.state);
    return (
      <center className="container">
        <IndexContainer breweries={this.state.breweries}/>
        <BoardContainer handleSubmit={this.handleSubmit} boards={this.state.boards} />
      </center>
    );
  }
}

export default App;
