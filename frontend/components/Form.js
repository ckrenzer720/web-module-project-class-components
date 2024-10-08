import React from 'react'

export default class Form extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
    }
  }
  onSubmit = evt => {
    evt.preventDefault()
    this.props.addTodo(this.state.name)
    this.setState({
      ...this.state,
      name: ''
    })
  }
  onChange = evt => {
    this.setState({
      ...this.state,
      name: evt.target.value
    })
  }
  
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input type="text" value={this.state.name} onChange={this.onChange} placeholder='Type todo'/>
        <input type="submit"/>
      </form>
    )
  }
}
