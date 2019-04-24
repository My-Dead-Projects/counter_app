import React, { Component } from "react"

class Counter extends Component {
  state = {
    value: this.props.counter.value
  }

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 })
  }

  render() {
    return (
      <div>
        <span className={this.counterClasses()}>
          {this.state.value === 0 ? "Zero" : this.state.value}
        </span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          +
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      </div>
    )
  }

  counterClasses() {
    return `badge m-2 badge-${this.state.value === 0 ? "warning" : "primary"}`
  }
}

export default Counter
