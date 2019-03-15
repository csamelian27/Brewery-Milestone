import React, { Component } from 'react';
import BoardCard from '../Components/BoardCard'

class BoardContainer extends Component {

  state = {
    boardName: "",
    brews: []
  }

  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({
      boardName: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleSubmit(this.state)
    this.setState({
      boardName: ""
    })
  }

  render(){
    console.log(this.state);
    return (
      <div className="boardContainer">
        <div className="boardsDiv">
          <h1>Boards</h1>
          <form onSubmit={this.handleSubmit} className="boardForm">
            <input type="text" name="boardName" placeholder="board name" value={this.state.boardName} onChange={this.handleChange} />
            <button>Create Board</button>
          </form>
        </div>
        <div className="cardsDiv">
          {this.props.boards.map((board, index) => <BoardCard key={index} board={board} />)}
        </div>
      </div>
    )
  }
}

export default BoardContainer
