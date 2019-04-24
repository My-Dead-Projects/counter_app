import React, { Component } from "react"
import Counter from "./counter"

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  }

  handleDelete = id => {
    this.setState({ counters: this.state.counters.filter(c => c.id !== id) })
  }

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0
      return c
    })
    this.setState({ counters })
  }

  handleIncrement = counter => {
    const counters = this.state.counters.map(c =>
      c.id === counter.id ? { ...c, value: c.value + 1 } : c
    )
    this.setState({ counters })
  }

  render() {
    return (
      <div>
        <button
          onClick={this.handleReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        ))}
      </div>
    )
  }
}

export default Counters
