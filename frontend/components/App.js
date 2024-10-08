import React, { useState } from 'react'
import Form from './Form'
import TodoList from './TodoList';

let id = 0
let getId = () => id++

const todos = [
  {name: "Walk the dog", id: getId(), completed: false }, 
  {name: "Learn React", id: getId(), completed: false}, 
  {name: "Have fun", id: getId(), completed: false}
]

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todos
    }
  }

  toggleComplete = id => {
    this.setState({todos: this.state.todos.map(todo => {
      if (id == todo.id) {
        return {...todo, completed: !todo.completed}
      } else {
        return todo
      }
    })})
  }
  addTodo = (e, todo) => {
    e.preventDefault()
    const newTodo = {
      name: todo,
      id: getId(),
      completed: false
    }
    this.setState({...this.state, todos: [...this.state.todos, newTodo]})
  }
  render() {
    return (
      <div>
        <TodoList todos={this.state.todos} toggleComplete={this.toggleComplete}/>
        <Form />
      </div>
    )
  }
}
