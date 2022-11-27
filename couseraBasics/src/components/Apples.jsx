import React from 'react';
import Bag from './Bag';

{/* <Bag children={<Apples color="yellow" number="5"/>}/> */}

export default function Apples(props) {
  return (
    <div>
        <div>
            <h2>These Apples are: {props.color}</h2>
        </div>
        <div>
            <h3>THere are {props.number} apples.</h3>
        </div>
    </div>
  )
}
