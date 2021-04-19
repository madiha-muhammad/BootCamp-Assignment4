import React,{useState}  from 'react';
import './App.css';

function App() {
  let [count, setCount] = useState(0);

  return (
    <div>
      <h5>Value of counter variable: {count}</h5>
    </div>
  );
}

export default App;
