// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

const ACTION_TYPES = {
  DECREMENT: 'DECREMENT',
  INCREMENT: 'INCREMENT',
}

function countReducer(state, action) {
  switch (action.type) {
    case ACTION_TYPES.INCREMENT: {
      return {...state, count: state.count + action.step}
    }
    case ACTION_TYPES.DECREMENT: {
      return {...state, count: state.count - action.step}
    }
    default: {
      throw new Error(`Unexpected action type: ${action.type}`)
    }
  }
}

function Counter({initialCount = 0, step = 1}) {
  const [state, dispatch] = React.useReducer(countReducer, {
    count: initialCount,
  })

  const {count} = state

  const decrement = () => dispatch({type: ACTION_TYPES.DECREMENT, step})
  const increment = () => dispatch({type: ACTION_TYPES.INCREMENT, step})

  return (
    <>
      <button onClick={increment}>{count}</button>
      <button onClick={decrement}>DECREMENT</button>
    </>
  );
}

function App() {
  return <Counter />
}

export default App
