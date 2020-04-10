import React, { useState } from 'react'
import { todos } from './../../todos.json'
const Todo = () => {
  const [listTodo, setListTodo] = useState(todos)

  const toDoList = () => {
    const list = listTodo.map((todo, index) => {
      return (
        <div className='card col-xl-2 col-lg-3 col-md-5 col-sm-12' key={index}>
          <div className='card-head'>
            <h3 className='card-title'>{todo.title}</h3>
            <span className='priority badge badge-pill badge-danger'>
              {todo.priority}
            </span>
          </div>
          <div className='card-body'>
            <p className='card-text'>{todo.description}</p>
            <hr />
            <p className='card-text responsible'>{todo.responsible}</p>
          </div>
          <div className='card-footer'>
            <button
              className='btn btn-danger btn-block'
              onClick={() => removeToDo(index)}
            >
              Delete
            </button>
          </div>
        </div>
      )
    })
    return list
  }

  const addTodo = (todo) => {
    setListTodo(...listTodo, todo)
  }

  const removeToDo = index => {
    if (window.confirm('Are you sure you want delete it?')) {
      setListTodo(listTodo.filter((e, i) => i !== index))
    }
  }

  return (
    <>
      {
        toDoList()
      }
    </>
  )
}

export default Todo
