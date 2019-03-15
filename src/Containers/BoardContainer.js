import React, { Component } from 'react';
import BoardCard from '../Components/BoardCard'

class BoardContainer extends Component {

  state = {
    boardName: ""
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
        <h1>Boards</h1>
        <form onSubmit={this.handleSubmit} >
          <input type="text" name="boardName" placeholder="board name" value={this.state.boardName} onChange={this.handleChange} />
          <button>Create Board</button>
        </form>
        {this.props.boards.map((board, index) => <BoardCard key={index} board={board} />)}
      </div>
    )
  }
}

export default BoardContainer
