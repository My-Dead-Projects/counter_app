import React, { Component } from "react"

class Counter extends Component {
  state = {
    count: 0
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 })
  }

  render() {
    return (
      <div>
        <span className={this.counterClasses()}>
          {this.state.count === 0 ? "Zero" : this.state.count}
        </span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    )
  }

  counterClasses() {
    return `badge m-2 badge-${this.state.count === 0 ? "warning" : "primary"}`
  }
}

export default Counter
