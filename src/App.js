import React from 'react';
import logo from './logo.svg';
import './App.css';
import { todos } from './../src/todos.json';
import Form from './Components/Form';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      title: "Mi notas",
      todos
    }
  }


  render() {
    const todo = this.state.todos.map((todo, i) => {
      return (
        <div className="col-lg-4 col-md-6 mt-4" key={i}>
          <div className="card">
            <div className="card-head">
              <h3>{todo.title}</h3>
              <span className="priority badge badge-pill badge-danger">{todo.priority}</span>
            </div>
            <div className="card-body">
              <p>{todo.description}</p>
              <hr />
              <p className="responsible">{todo.responsible}</p>
            </div>
          </div>
        </div>
      )
    })

    return (
      <div className="App">
        {/* <Navigation titulo="Este es mi titulo"/> */}
        <img src={logo} className="App-logo" alt="logo" />
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="#">{this.state.title}
            <span className="contador ml-3 align-middle priority badge badge-pill badge-light">
              {this.state.todos.length}
            </span>
          </a>

        </nav>

        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-5">
              <Form />
            </div>
            <div className="col-lg-8 col-md-7">
              <div className="row">
                {todo}
              </div>
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;
