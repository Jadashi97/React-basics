import { useState } from 'react'
import './App.css';
import ModeToggleBtn from './components/ModeToggleBtn';
// import Apples from './components/Apples';

//// Expressions as props
const bool = false;
const str1 = "just";


const Example = (props)=>{
  return(
    <div>
      <h2>The value of the toggleBoolean prop is: {props.toggleBoolean.toString()}</h2>
      <p>The value of the math prop is: <em>{props.math}</em></p>
      <p>The value of the math prop is: <em>{props.str}</em></p>
    </div>
  );
};


function App() {
  const [count, setCount] = useState(0)

  // let nums = [2,3,4,5];
  // console.log(nums.forEach((num)=> num * 5));

  return (
    <div className="App">
      <h1>Hello World</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div>
        <Example
          toggleBoolean={!bool}
          // below shows that we can use props inside jsx same as we can use expression in function components
          math={(10 + 20)/3}
          str={str1 + 'another' + 'string'}
        />
      </div>
      <ModeToggleBtn/>
    </div>
  );
};

export default App
