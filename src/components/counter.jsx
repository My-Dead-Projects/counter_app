import React from "react"

const Counter = ({ counter, onIncrement, onDelete }) => (
  <div>
    <span
      className={`badge m-2 badge-${
        counter.value === 0 ? "warning" : "primary"
      }`}
    >
      {counter.value}
    </span>
    <button
      onClick={() => onIncrement(counter)}
      className="btn btn-secondary btn-sm m-2"
    >
      +
    </button>
    <button
      onClick={() => onDelete(counter.id)}
      className="btn btn-danger btn-sm"
    >
      Delete
    </button>
  </div>
)

export default Counter
