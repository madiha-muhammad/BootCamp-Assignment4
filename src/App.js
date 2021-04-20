import React, { useState } from 'react';
import { Message } from './message.js';
import './App.css';

function App() {
  let [count, setCount] = useState(0);
  let [isMorning, setMorning] = useState(true);

  return (
    <div className={`box ${isMorning ? 'dayLight' : ''}`}>
      <h4>Day Time = {isMorning ? 'Morning' : 'Evening'}</h4>

      <Message counter={count}/>
      <br/>
      <button onClick={
        () => setCount(++count)
        }>
          Update Counter
      </button>

      <button onClick = {
        () => setMorning(!isMorning)}>Update Day</button>
    </div>
  );
}

export default App;
