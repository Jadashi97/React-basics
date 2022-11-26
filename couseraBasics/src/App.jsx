import { useState } from 'react'
import './App.css';
import Apples from './components/Apples';

function App() {
  const [count, setCount] = useState(0)

  let nums = [2,3,4,5];
  console.log(nums.forEach((num)=> num * 5));


  return (
    <div className="App">
      <h1>Hello World</h1>
      <Apples/>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  )
}

export default App
