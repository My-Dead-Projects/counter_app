import React, { Component } from "react"

class Counter extends Component {
  render() {
    return (
      <div>
        <span className={this.counterClasses()}>
          {this.props.counter.value === 0 ? "Zero" : this.props.counter.value}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
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
    return `badge m-2 badge-${
      this.props.counter.value === 0 ? "warning" : "primary"
    }`
  }
}

export default Counter
