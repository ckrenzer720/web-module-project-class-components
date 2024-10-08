import React from 'react'

export default class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
    }
  }
  onSubmit = evt => {
    
  }
  onChange = evt => {
    this.setState({
      name: evt.target.value
    })
  }
  render() {
    const { addTodo } = this.props
    return (
      <form onSubmit={this.onSubmit}>
        <input type="text" value={this.state.name} onChange={this.onChange} />
        <input type="submit" value="submit :(" />
      </form>
    )
  }
}
