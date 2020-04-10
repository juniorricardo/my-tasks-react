import React from 'react'
import logo from './logo.svg'
import './App.css'
import { todos } from './../src/todos.json'
import { clients } from './../src/clientList.json'
import Form from './Components/Form'
import Todo from './Components/Todo/Todo'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      title: 'Tasks App',
      todo: null,
      todos
    }
    // Put the object into storage
    localStorage.setItem('clients', JSON.stringify(clients))

    // Retrieve the object from storage
    var retrievedObject = localStorage.getItem('clients')

    console.log('clients: ', JSON.parse(retrievedObject))
    this.handleAddTodo = this.handleAddTodo.bind(this)
  }

  handleAddTodo (todo) {
    if (todo !== null && todo !== this.state.todo) {
      this.setState(todo)
    }
    // this.setState({
    //   todos: [...this.state.todos, todo]
    // })
  }

  render () {
    return (
      <div className='App'>
        <img src={logo} className='App-logo' alt='logo' />
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark mb-4'>
          <a className='navbar-brand' href='#'>
            {this.state.title}
            <span className='contador ml-3 align-middle priority badge badge-pill badge-light'>
              {this.state.todos.length}
            </span>
          </a>
        </nav>

        <div className='container-fluid'>
          <div className='row justify-content-md-center'>
            <div className='col-xl-2 col-lg-3 col-md-4'>
              <Form onAddTodo={this.handleAddTodo} />
            </div>
            <div className='col-xl-10 col-lg-9 col-md-8'>
              <div className='row card-columns mx-0 px-0'>
                {/* {toDoList} */}
                <Todo todos={this.state.todos} 
                      newTodo={this.state.todo} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
