import React from 'react'

const URL = 'http://localhost:9000/api/todos'

export default class App extends React.Component {
  render() {
    return(
      <div>
        <div id="error"> Error: No error here</div>
        <div id="todos">
          <h2>Todos:</h2>
          <div>Walk the dog</div>
          <div>Learn React ✅</div>
        </div>
        <form id="todoForm">
          <input type="text" placeholder='Type todo'></input>
          <input type='submit'></input>
          <button>Clear Completed</button>
        </form>
      </div>
    )
  }
}
