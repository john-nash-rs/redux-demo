import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './reducers/counterReducer';

function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Redux Toolkit Demo</h1>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment By 1</button>
      <button onClick={() => dispatch(decrement())}>Decrement By 1</button>
    </div>
  );
}

export default App;
