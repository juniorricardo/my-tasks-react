import React from 'react';
import logo from './logo.svg';
import './App.css';
import { todos } from './../src/todos.json';
import Form from './Components/Form';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      title: "Tasks App",
      todos
    }
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  handleAddTodo(todo){
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }

  render() {
    const toDoList = this.state.todos.map((todo, i) => {
      return (
        <div className="card col-xl-3 col-lg-4 col-md-6 col-sm-12" key={i}>
            <div className="card-head">
              <h3 className="card-title">{todo.title}</h3>
              <span className="priority badge badge-pill badge-danger">
                {todo.priority}
              </span>
            </div>
            <div className="card-body">
              <p className="card-text">{todo.description}</p>
              <hr />
              <p className="card-text responsible">{todo.responsible}</p>
            </div>
        </div>
      )
    })

    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
          <a className="navbar-brand" href="">
            {this.state.title}
            <span className="contador ml-3 align-middle priority badge badge-pill badge-light">
              {this.state.todos.length}
            </span>
          </a>

        </nav>

        <div className="container-fluid">
          <div className="row justify-content-md-center">
            <div className="col-xl-2 col-lg-3 col-md-4">
              <Form onAddTodo={this.handleAddTodo}/>
            </div>
            <div className="col-xl-10 col-lg-9 col-md-8">
              <div className="row justify-content-md-center">
                {toDoList}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
