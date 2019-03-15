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
      boards: [...this.state.boards, boardInfo]
    }, () => console.log(this.state))
  }

  handleClick = (brewery, board) => {
    const newArray = [...this.state.boards]
    //found the board that we want to add a brew to
    const myBoard = newArray.find(boardObj => board === boardObj.boardName)
    //add the brew to myBoard's array of brews
    myBoard.brews = [...myBoard.brews, brewery]
    this.setState({
      boards: newArray
    })
  }

  render() {
    console.log(this.state);
    return (
      <div className="container">
        <IndexContainer breweries={this.state.breweries} handleClick={this.handleClick} boards={this.state.boards} />
        <BoardContainer handleSubmit={this.handleSubmit} boards={this.state.boards} />
      </div>
    );
  }
}

export default App;
